import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './order.model';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { CampsService } from 'src/camps/camps.service';
import { BotService } from 'src/bot/bot.service';
// import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {

    constructor(
        @InjectModel('Order') private orderModel: Model<Order>,
        // @InjectBot() private bot: Telegraf,
        private campService: CampsService,
        private botService: BotService
    ) {}
    // dto.title + ' ' + dto.firm + ' ' + dto.model + '\n' + dto.problem + '\n' + dto.info + '\n' + dto.manager + '\n' + dto.order + '\n' + dto.clientTel + '\n' + new Date(dto.date).toLocaleDateString()
    async createOrder(dto: CreateOrderDto, tId: any, _id: string){
        const order = await this.orderModel.create(dto)

        await this.botService.newOrderTelegramMessage(tId, order.order, _id)
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
