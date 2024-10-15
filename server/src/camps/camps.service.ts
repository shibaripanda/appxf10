import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Camp } from './camp.model';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { validObjectId } from 'src/modules/validObjectId';

@Injectable()
export class CampsService {

    constructor(
        @InjectModel('Camp') private campModel: Model<Camp>,
        private usersService: UsersService) {}

     

    async createCamp(dto: any){
        const order = await this.campModel.create(dto)
        return order
    }

    async deleteSubCamp(campId: string, obj: object){
        await this.campModel.updateOne({_id: campId}, {$pull: {subcamps: obj['id']}}) 
    }

    async getMySubs(campId: string){
        const subs = await this.campModel.findOne({_id: campId}, {subcamps: 1})
        const res = []
        for(const i of subs.subcamps){
            res.push({id: i, name: (await this.campModel.findOne({_id: i}, {name: 1})).name})
        }
        return res
    }

    async addSubCamp(campId: string, obj: object){
        console.log(obj['id'])
        if(validObjectId(obj['id'])){
            const res = await this.campModel.findOne({_id: obj['id']})
            if(res){
                console.log('addsub')
                await this.campModel.updateOne({_id: campId}, {$addToSet: {subcamps: obj['id']}}) 
            }
            else{
                console.log('not addsub')
            } 
        }
        else{
           console.log('no objId') 
        }
    }

    async getSubServices(campId){
        return (await this.campModel.find({subcamps: campId}, {_id: 1})).map(item => item._id)
    }

    async getCamp(){
        return await this.campModel.find({})
    }

    async getCampsByOwnerEmail(user: any){
        const camps = await this.campModel.find({users: {$elemMatch: {email: user.email}}})
        return camps.map(item => item._id)
    }
    async getUsersCamps(email){
        const camps = await this.campModel.find({users: {$elemMatch: {email: email}}}, {_id: 1, name: 1, users: 1})
        const res = []
        for(const i of camps){
            res.push({_id: i._id, name: i.name, role: i.users.find(item => item['email'] === email)['role']})
        }
        return res
    }
    async searchNewUser(email){
        const camps = await this.campModel.find({users: {$elemMatch: {email: email}}})
        return camps
    }
    async getSettingsCamp(campId: string, userId: string){
        const settings = await this.campModel.findOne({_id: campId}, {_id: 0, userSettings: 1, documentSettings: 1, generalSettings: 1})
        return {...settings.userSettings[userId], ...settings.documentSettings,  ...settings.generalSettings}
    }
    async updateUserSettings(campId: string, obj: object, userId: string){
        const link = 'userSettings.' + userId + '.' + obj['item']
        
        await this.campModel.updateOne({_id: campId}, {[link]: obj['newData']})
        
    }
    async updateDocumentSettings(campId: string, obj: object){
        const link = 'documentSettings.documents.' + obj['item'] + '.text'
        await this.campModel.updateOne({_id: campId}, {[link]: obj['newData']})
    }
    async updateGeneralSettings(campId: string, obj: object){
        const link = 'generalSettings.'
        await this.campModel.updateOne({_id: campId}, {$set: {[link]: obj}})
    }
    async updateSettingsCamp(campId: string, obj: object, userId: string){
        const link = 'userSettings.' + userId
        await this.campModel.updateOne({_id: campId}, {[link]: obj})
    }
    async addNewUserToCamp(campId: string, obj: object){
        const res = await this.campModel.find({_id: campId, users: {$elemMatch: {email: obj['email']}}})
        if(!res.length){
            await this.campModel.updateOne({_id: campId}, {$addToSet: {users: obj}})
        }
    }
    async getUsersOfCamp(campId: string){
        const res: any = (await this.campModel.findOne({_id: campId}, {users: 1, _id: 0})).users
        const userName = await this.usersService.findUsersName(res.map(item => item['email']))
        for(const i of res){
            i.name = (userName.find(item => item.email === i.email))?.name ? (userName.find(item => item.email === i.email))?.name : 'noname'
        }
        return res
    }
    async deleteUserFromCamp(campId: string, obj: object){
        await this.campModel.updateOne({_id: campId}, {$pull: {users: obj}})
    }
    async editUserRole(campId: string, obj: object){
        console.log(obj)
        await this.campModel.updateOne({_id: campId}, { $set: { 'users.$[el].role': obj['role']} },{
            arrayFilters: [{ 'el.email': obj['email'] }],
            new: true
         })
    }
}
