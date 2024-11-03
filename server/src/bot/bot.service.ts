import {
    Update,
    Ctx,
    Start,
    InjectBot,
    // Help,
    // On,
    // Hears,
  } from 'nestjs-telegraf'
import { botStart } from './telegram/triggers/botStart'
import { UsersService } from 'src/users/users.service';
import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';
// import { InjectModel } from '@nestjs/mongoose';
  
  @Update()
  @Injectable()
  export class BotService {

    constructor(
        @InjectBot() private bot: Telegraf,
        private userService: UsersService
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
  
    // @On('sticker')
    // async on(@Ctx() ctx: TelegrafContext) {
    //   await ctx.reply('👍');
    // }
  
    // @Hears('hi')
    // async hears(@Ctx() ctx: TelegrafContext) {
    //   await ctx.reply('Hey there');
    // }

    async newOrderTelegramMessage(tId, order, userId){
        console.log(tId, order, userId)
        await this.userService.orderForMedia(userId, order.order)
        await this.bot['telegram']['sendMessage'](tId, `Send photo for ${order.order}`, {parse_mode: 'HTML'}).catch(error => console.log(error))
    }  
  }
