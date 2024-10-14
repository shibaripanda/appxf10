
export const botStart = async (bot, data) => {
    try{
        bot.start(async (ctx) => {
            const res = await data.userService.getUserByTelegramToken(ctx.startPayload)
            await data.userService.updateTelegramId(res._id, ctx.from.id)
            await ctx.telegram.sendMessage(ctx.message.chat.id, 'Hello', {parse_mode: 'HTML'}).catch(error => console.log(error))
        })
    }
    catch(error){
        console.log(error)
    }
}
