import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel('User') private userModelNestreact: Model<User>) {}


    async updateUserOrderPhoto(telegramId: any, photo: any){
        // await this.userModelNestreact.updateOne({telegramId: telegramId}, {photos: []})
        await this.userModelNestreact.updateOne({telegramId: telegramId}, {$push: {photos: photo}})
    }

    async orderForMedia(_id: any, orderId: string){
        await this.userModelNestreact.updateOne({_id: _id}, {currentOrderMedia: orderId})
    }

    async getUserByTelegramId(telegramId: any){
        return await this.userModelNestreact.findOne({telegramId: telegramId})
    }

    async updateTelegramId(id: any, telegramId: any){
        await this.userModelNestreact.updateOne({_id: id}, {telegramId: telegramId})
    }

    async getUserByTelegramToken(token){
        const res = await this.userModelNestreact.findOne({telegramtoken: token})
        return res
    }

    async createUser(dto: CreateUserDto){
        const user = await this.userModelNestreact.create(dto)
        return user
    }

    async getUser(id){
        const user = await this.userModelNestreact.findOne({_id: id}, {password: 0, emailAuthCode: 0, createdAt: 0, updatedAt: 0, __v: 0, _id: 0})
        console.log(user)
        return user
    }

    async getUserByEmail(email: string){
        const user = await this.userModelNestreact.findOne({email: email})
        return user
    }

    async updateUser(id: any, dto: any){
        await this.userModelNestreact.updateOne({_id: id}, dto)
    }

    async findUsersName(arr: []){
        return await this.userModelNestreact.find({email: arr}, {_id: 0, email: 1, name: 1})
    }

}
