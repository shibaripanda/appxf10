import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from '../orders/orders.module';
import { FixModule } from '../fix/fix.module';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { CampsModule } from '../camps/camps.module';
import { BotModule } from '../bot/bot.module';
import { AppSchema } from './app.model';
// import { TelegrafModule } from 'nestjs-telegraf'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'App', schema: AppSchema }]),
    MongooseModule.forRoot(process.env.MONGO_TOKEN),
    OrdersModule, 
    FixModule, 
    AuthModule, 
    UsersModule, 
    CampsModule,
    BotModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
