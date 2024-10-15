import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './order.model';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { CampsService } from 'src/camps/camps.service';
// import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {

    constructor(
        @InjectModel('Order') private orderModel: Model<Order>,
        private campService: CampsService,
    ) {}

    async createOrder(dto: CreateOrderDto){
        const order = await this.orderModel.create(dto)
        return order
    }

    async deleteOrder(orderId){
        const orders = await this.orderModel.deleteOne({_id: orderId})
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
