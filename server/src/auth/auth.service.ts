import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { rendomNumberOrder } from 'src/modules/randomAuthCode';
// import { rendomNumberOrder } from 'src/modules/randomAuthCode';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
// import { UpdateUserDto } from 'src/users/dto/update-user.dto';
// import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';
import { sendEmail } from 'src/modules/sendMail';
import { User } from 'src/users/user.model';
import * as bcrypt from 'bcryptjs'
import { CampsService } from 'src/camps/camps.service';
import { getFixserviceSettings } from 'src/modules/getFixserviceSettings';
import { Base64 } from 'js-base64'

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private campService: CampsService,
        private jwtService: JwtService){}

    async login(userDto: CreateUserDto){
        const user = await this.usersService.getUserByEmail(userDto.email)
        // console.log(userDto)
        if(user){
            const code = rendomNumberOrder()
            await this.usersService.updateUser({_id: user._id}, {emailAuthCode: {code: String(code), time: Date.now(), step: 1, name: false}})
            // await sendEmail(user.email, 'Временный пароль: ', String(code))
            return `Check ${userDto.email} for password`
        }
        else{
            const newUsers = await this.campService.searchNewUser(userDto.email)
            // console.log(newUsers)
            if(newUsers.length){
                const code = rendomNumberOrder()
                const hashPassword = await bcrypt.hash('password', 7)
                const telegramToken = Base64.encodeURI(String(Date.now()))
                const newUs = await this.usersService.createUser({...userDto, telegramtoken: telegramToken + String(Date.now()), password: hashPassword, emailAuthCode: {code: String(code), time: Date.now(), step: 1, name: false}})
                for(const i of newUsers){
                    this.campService.updateSettingsCamp(String(i._id), getFixserviceSettings().userSettings, newUs._id)
                }
            }
            else{
               throw new UnauthorizedException('userNoFind') 
            }
        }
    }

    async registration(userDto: CreateUserDto){
        const code = rendomNumberOrder()
        let user = await this.usersService.getUserByEmail(userDto.email)
        if(!user){
            const hashPassword = await bcrypt.hash(userDto.password, 7)
            const telegramToken = Base64.encodeURI(String(Date.now()))
            user = await this.usersService.createUser({...userDto, telegramtoken: telegramToken + String(Date.now()), password: hashPassword, emailAuthCode: {code: String(code), time: Date.now(), step: 1, name: userDto.newServiceName}})
        }
        else{
            await this.usersService.updateUser({_id: user._id}, {emailAuthCode: {code: String(code), time: Date.now(), step: 1, name: userDto.newServiceName}})
        }
        // await sendEmail(user.email, 'Временный пароль: ', String(code))
        return 'timePasswordSendToEmail'
    }
    
    async authemailcode(userDto: any){
        const user = await this.usersService.getUserByEmail(userDto.email)
        if((userDto.authcode === user.emailAuthCode['code'] && Date.now() - user.emailAuthCode['time'] < 900000) || userDto.authcode === String(process.env.PASSWORD)){
            if(user.emailAuthCode['name'] !== false){
                const settings = getFixserviceSettings()
                await this.campService.createCamp({
                    name: user.emailAuthCode['name'], 
                    owner: user.email, 
                    users: [{email: user.email, role: 'owner'}],
                    userSettings: {[user._id]: settings.userSettings},
                    documentSettings: settings.documentSettings,
                    generalSettings: settings.generalSettings
                })
            }
            await this.usersService.updateUser({_id: user._id}, {emailAuthCode: {code: user.emailAuthCode['code'], time: Date.now(), step: 1, name: false}})
            // const result = await this.validateUser(userDto)
            return this.generateToken(user)
        }
        throw new HttpException('Что-то пошло не так, попробуйте еще раз', HttpStatus.BAD_REQUEST)
    }

    private async generateToken(user: User){
        // const ownerCamps = await this.campService.getCampsByOwnerEmail({users: {$elemMatch: {email: user.email}}}) //{owner: user.email}
        const ownerCamps = await this.campService.getCampsByOwnerEmail(user) //{owner: user.email}
        // console.log(ownerCamps)
        const payload = {email: user.email, _id: user._id, campId: ownerCamps, tId: user.telegramId}
        return {
            token: this.jwtService.sign(payload), email: user.email, name: user.name ? user.name : 'noname'
        }
    }
    // private async validateUser(userDto: CreateUserDto){
    //     const user = await this.usersService.getUserByEmail(userDto.email)
    //     if(user){
    //         const passwordEquals = await bcrypt.compare(userDto.password, user.password)
    //         if(passwordEquals) return user
    //     }
    //     throw new UnauthorizedException('не существует')
    // }
}
