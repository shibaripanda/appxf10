import {
    Update,
    Ctx,
    Start,
    InjectBot,
    // Help,
    On,
    // Hears,
  } from 'nestjs-telegraf'
// import { botStart } from './telegram/triggers/botStart'
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
      const res = await this.userService.getUserByTelegramToken(ctx.startPayload)
      const user = await this.userService.getUserByTelegramId(ctx.from.id)
      if(res){
        if(JSON.stringify(res) === JSON.stringify(user)){
          await this.bot.telegram.sendMessage(ctx.message.chat.id, 'Connected! ✅', {parse_mode: 'HTML'}).catch(error => console.log(error))
        }
        else if(!res.telegramId && user){
          await this.bot.telegram.sendMessage(ctx.message.chat.id, 'The account is already taken! ❌', {parse_mode: 'HTML'}).catch(error => console.log(error))
        }
        else if(!res.telegramId){
          await this.userService.updateTelegramId(res._id, ctx.from.id)
          await this.bot.telegram.sendMessage(ctx.message.chat.id, 'Connected! ✅', {parse_mode: 'HTML'}).catch(error => console.log(error))
        }
      }
      else if(!res && user && user.telegramId === ctx.from.id){
        await this.bot.telegram.sendMessage(ctx.message.chat.id, 'Connected! ✅', {parse_mode: 'HTML'}).catch(error => console.log(error))
      }
      else{
          await this.bot.telegram.sendMessage(ctx.message.chat.id, 'Incorrect data ❌', {parse_mode: 'HTML'}).catch(error => console.log(error))
      }
    }
  
    // @Help()
    // async help(@Ctx() ctx: TelegrafContext) {
    //   await ctx.reply('Send me a sticker');
    // }
  
    @On('photo')
    async on(@Ctx() ctx: any) {
        const url = await this.bot.telegram.getFileLink(ctx.message.photo[0].file_id)
        const buffer = await (await fetch(url.href)).arrayBuffer()
        // await this.mongoBot.updateOne({$addToSet: {content: {type: 'photo', media: data, tx: caption ? caption : '', buffer: Buffer.from(buffer).toString('base64')}}})
        await this.userService.updateUserOrderPhoto(ctx.from.id, {type: 'photo', media: ctx.message.photo[0].file_id, max: Buffer.from(buffer).toString('base64')})
        await ctx.reply('ok')
    }
  
    // @Hears('hi')
    // async hears(@Ctx() ctx: TelegrafContext) {
    //   await ctx.reply('Hey there');
    // }

    async newOrderTelegramMessage(tId, order){
        const text =
          order.order + '\n'  
        + order.title + ' ' 
        + order.firm + ' ' 
        + order.model + '\n' 
        + order.problem + '\n' 
        + order.info + '\n' 
        + order.clientTel + '\n'
        + order.manager + '\n' 
        + new Date(order.date).toLocaleDateString()
        
        if(order.photos.length){
          order.photos[0] = {...order.photos[0], caption: text, parse_mode: 'HTML'}
          await this.bot.telegram.sendMediaGroup(tId, order.photos).catch(error => console.log(error))
        }
        else{
          await this.bot.telegram.sendMessage(tId, text, {parse_mode: 'HTML'}).catch(error => console.log(error))
        }

    }  
  }
