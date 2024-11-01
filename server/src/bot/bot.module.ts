import { forwardRef, Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { UsersService } from 'src/users/users.service';
import { CampsService } from 'src/camps/camps.service';
import { OrdersService } from 'src/orders/orders.service';

@Module({
  imports: [
    // forwardRef(() => UsersService),
    // UsersService
    // CampsService, 
    // OrdersService
  ],
  providers: [BotService],
  exports: [BotService]
})
export class BotModule {}
