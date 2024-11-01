import { Injectable } from '@nestjs/common'
import { telegramBot } from './telegram/telegramBot';
import { UsersService } from './users/users.service'
import { CampsService } from './camps/camps.service'

@Injectable()
export class AppService {

  constructor(private userService: UsersService,
              private campService: CampsService){}

  async onApplicationBootstrap() {
    global.bot = await telegramBot({campService: this.campService, userService: this.userService})
  }

  async newOrderTelegramMessage(id, data){
    await global.bot.telegram.sendMessage(id, data, {parse_mode: 'HTML'}).catch(error => console.log(error))
  }  

}
