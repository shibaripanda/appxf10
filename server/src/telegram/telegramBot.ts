import { Telegraf } from 'telegraf'
import { botStart } from 'src/telegram/triggers/botStart'

export const telegramBot = async (data: any) => {
    try{
        const option: any = {allowedUpdates: ['chat_member', 'callback_query', 'message', 'channel_post'], dropPendingUpdates: true}
        const bot = new Telegraf(process.env.BOT_TOKEN)

        await botStart(bot, data)
        
        // await botChatMember(bot, appContext)
        // await botCommands(bot, appContext)
        // await botMessage(bot, appContext)
        // await botCallback(bot, appContext)


        bot.launch(option)
        process.once('SIGINT', () => bot.stop('SIGINT'))
        process.once('SIGTERM', () => bot.stop('SIGTERM'))
        return bot 
    }
    catch(error){
        console.log(error)
    } 
}