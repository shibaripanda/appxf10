import { forwardRef, Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { UsersModule } from 'src/users/users.module';
// import { CampsModule } from 'src/camps/camps.module';
import { OrdersModule } from 'src/orders/orders.module';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [
    TelegrafModule.forRoot({token: process.env.BOT_TOKEN}),
    UsersModule,
    // CampsModule,
    // OrdersModule,
    // forwardRef(() => UsersModule),
    // forwardRef(() => CampsModule), 
    forwardRef(() => OrdersModule)
  ],
  providers: [BotService],
  exports: [BotService]
})
export class BotModule {}
