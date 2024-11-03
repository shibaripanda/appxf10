import { Module, forwardRef } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './order.model';
import { AuthModule } from 'src/auth/auth.module';
import { CampsModule } from 'src/camps/camps.module';
import { BotModule } from 'src/bot/bot.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]), 
    forwardRef(() => AuthModule),
    forwardRef(() => BotModule),
    forwardRef(() => UsersModule),
    // BotModule, 
    CampsModule
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService]
  
})

export class OrdersModule {}
