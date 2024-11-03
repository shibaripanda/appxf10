import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './order.model';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { CampsService } from 'src/camps/camps.service';
import { BotService } from 'src/bot/bot.service';
import { UsersService } from 'src/users/users.service';
// import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {

    constructor(
        @InjectModel('Order') private orderModel: Model<Order>,
        // @InjectBot() private bot: Telegraf,
        private campService: CampsService,
        @Inject(forwardRef(() => BotService))
        private botService: BotService,
        private userService: UsersService
    ) {}
    // dto.title + ' ' + dto.firm + ' ' + dto.model + '\n' + dto.problem + '\n' + dto.info + '\n' + dto.manager + '\n' + dto.order + '\n' + dto.clientTel + '\n' + new Date(dto.date).toLocaleDateString()
    
    async createOrder(dto: CreateOrderDto, tId: any, _id: string){
        const user = await this.userService.getUserByTelegramId(tId) //this.userService.getUser(_id)
        const user1 = await this.userService.getUserByTelegramId(tId)
        console.log('create ordr', user)
        console.log('create ordr1', user1)
        let order
        if(user.photos.length){
            order = await this.orderModel.create({...dto, photos: user.photos})
        }
        else{
            order = await this.orderModel.create({...dto, photos: []})
        }
        console.log('befor', order.photos)
        if(tId){
            await this.botService.newOrderTelegramMessage(tId, order, _id)
        }
        await this.userService.updateUser(_id, {photos: []})
        return order 
    }

    async updateOrderMedia(id, obj){
        const order = await this.orderModel.findOneAndUpdate({_id: id}, obj, {returnDocument: 'after'})
        return order
    }

    async deleteOrder(orderId){
        const orders = await this.orderModel.deleteOne({_id: orderId})
        return orders
    }
    async getOrdersActiv(campId: string){
        const subs = await this.campService.getSubServices(campId)
        const orders = await this.orderModel.find({campId: {$in : [campId, ...subs]}, status: {$nin: ['close', 'cancel']}})
        return orders
    }
    async getAllOrders(campId: string){
        const subs = await this.campService.getSubServices(campId)
        const orders = await this.orderModel.find({campId: {$in : [campId, ...subs]}})
        return orders
    }
    async updateOrder(id, obj){
        const order = await this.orderModel.findOneAndUpdate({_id: id}, obj, {returnDocument: 'after'})
        return order
    }

}
