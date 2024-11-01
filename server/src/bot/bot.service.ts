import { Injectable } from '@nestjs/common';
import { CampsService } from 'src/camps/camps.service';
import { OrdersService } from 'src/orders/orders.service';
import { telegramBot } from 'src/telegram/telegramBot';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class BotService {

    // constructor(
    //     private userService: UsersService,
    //     private campService: CampsService,
    //     private orderService: OrdersService
    // ){}

    // async onApplicationBootstrap() {
    //     global.bot = await telegramBot({campService: this.campService, userService: this.userService, orderService: this.orderService})
    // }

    // async newOrderTelegramMessage(tId, order, userId){
    //     console.log(tId, order, userId)
    //     await this.userService.orderForMedia(userId, order.orderId)
    //     await global.bot.telegram.sendMessage(tId, `Send photo for ${order.orderId}`, {parse_mode: 'HTML'}).catch(error => console.log(error))
    // }  

}
