import { Controller, Post, Body, Get, UseGuards, Param, Request, Delete, Put } from '@nestjs/common';
import { CreateOrderDto } from '../orders/dto/create-order.dto';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { UpdateOrderDto } from './dto/update-order.dto';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/api/orders')
export class OrdersController {

    constructor(private ordersService: OrdersService
    ){}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() orderDto: CreateOrderDto, @Request() req: any){
        return this.ordersService.createOrder({...orderDto, manager: req.user.email}, req.user.tId, req.user._id)
    }

    @UseGuards(JwtAuthGuard)
    @Post('/sendphoto/')
    sendPhotosToTelegram(@Body() obj: any, @Request() req: any){
        console.log(obj)
        // console.log(req.user.tId)
        if(req.user.campId.includes(obj.campId) && req.user.tId){
            this.ordersService.sendPhotosToTelegram(obj.campId, obj.orderId, req.user.tId)
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('/or/:campId')
    getAllOrders(@Param('campId') campId: string, @Request() req: any, @Body() filter: any){
        if(req.user.campId.includes(campId)){
            return this.ordersService.getAllOrders(campId, filter)
        }
        return []
    }

    @UseGuards(JwtAuthGuard)
    @Get('/activ/:campId')
    getOrdersActiv(@Param('campId') campId: string, @Request() req: any){
        if(req.user.campId.includes(campId)){
            return this.ordersService.getOrdersActiv(campId)
        }
        return []
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':orderId')
    deleteOrder(@Param('orderId') orderId: string){
        return this.ordersService.deleteOrder(orderId)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':orderId')
    updateOrder(@Body() orderDto: CreateOrderDto, @Param('orderId') orderId: string){
        console.log('ddd')
        return this.ordersService.updateOrder(orderId, orderDto)
    }
}
