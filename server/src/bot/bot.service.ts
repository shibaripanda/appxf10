import {
    Update,
    Ctx,
    Start,
    InjectBot,
    // Help,
    On,
    // Hears,
  } from 'nestjs-telegraf'
import { botStart } from './telegram/triggers/botStart'
import { UsersService } from 'src/users/users.service';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { OrdersService } from 'src/orders/orders.service';
// import { InjectModel } from '@nestjs/mongoose';
  
  @Update()
  @Injectable()
  export class BotService {

    constructor(
        @InjectBot() private bot: Telegraf,
        private userService: UsersService,
        @Inject(forwardRef(() => OrdersService))
        private orderService: OrdersService
    ) {}

    @Start()
    async start(@Ctx() ctx: any) {
      await botStart(ctx, this.userService)
      await ctx.reply('Welcome');
    }
  
    // @Help()
    // async help(@Ctx() ctx: TelegrafContext) {
    //   await ctx.reply('Send me a sticker');
    // }
  
    @On('photo')
    async on(@Ctx() ctx: any) {
        // console.log(ctx.message)
        await this.userService.updateUserOrderPhoto(ctx.from.id, 
            
                {type: 'photo', media: ctx.message.photo[0].file_id, max: ctx.message.photo[3].file_id}
            )
        const user = await this.userService.getUserByTelegramId(ctx.from.id)
        console.log('user photos', user.photos)
        // const user = await this.userService.getUserByTelegramId(ctx.from.id)
        // await this.userService.updateUser(user._id, {photos: []})
        await ctx.reply('👍');
    }
  
    // @Hears('hi')
    // async hears(@Ctx() ctx: TelegrafContext) {
    //   await ctx.reply('Hey there');
    // }

    async newOrderTelegramMessage(tId, order, userId){
        console.log(order)
        if(!order.photos.length){
            await this.bot.telegram.sendMessage(tId, order.order, {parse_mode: 'HTML'}).catch(error => console.log(error))
        }
        else{
            // order.photos.map(item => item.max)
            // order.photos[0] = {...order.photos[0], caption: order.order, parse_mode: 'HTML'}
            // console.log(order.photos.map(item => item.max))
            await this.bot.telegram.sendMediaGroup(tId, order.photos).catch(error => console.log(error))
        }
        // await this.userService.orderForMedia(userId, order.order)
        // await this.bot.telegram.sendMediaGroup(tId, [...order.photos], {caption: 'fgf', parse_mode: 'HTML'}).catch(error => console.log(error))
    }  
  }
