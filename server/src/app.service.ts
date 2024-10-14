import { Injectable } from '@nestjs/common'
// import { telegramBot } from './telegram/telegramBot';
import { UsersService } from './users/users.service'
import { CampsService } from './camps/camps.service'

@Injectable()
export class AppService {

  constructor(private userService: UsersService,
              private campService: CampsService){}

  // async onApplicationBootstrap() {
    // telegramBot({campService: this.campService, userService: this.userService})
  // }

}
