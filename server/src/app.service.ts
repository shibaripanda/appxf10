import { Injectable } from '@nestjs/common'
// import { telegramBot } from './telegram/telegramBot';
// import { UsersService } from './users/users.service'
// import { CampsService } from './camps/camps.service'
// import { OrdersService } from './orders/orders.service';

@Injectable()
export class AppService {

  // constructor(private userService: UsersService,
  //             private campService: CampsService,
  //             private orderService: OrdersService){}

  // async onApplicationBootstrap() {
  //   global.bot = await telegramBot({campService: this.campService, userService: this.userService, orderService: this.orderService})
  // }

  // async newOrderTelegramMessage(tId, order, userId){
  //   console.log(tId, order, userId)
  //   await this.userService.orderForMedia(userId, order.orderId)
  //   await global.bot.telegram.sendMessage(tId, `Send photo for ${order.orderId}`, {parse_mode: 'HTML'}).catch(error => console.log(error))
  // }  

}
