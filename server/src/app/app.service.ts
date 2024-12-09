import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { App, NewLengPack } from './app.model';
import { Model } from 'mongoose';
import { getLenguagesFromAI } from 'src/modules/lenguages/lengPackUpdate';
import { lengs, textArray } from 'src/modules/lenguages/allText';
import { textLib } from 'src/modules/lib';

@Injectable()
export class AppService {

  constructor(
    @InjectModel('App') private appModel: Model<App>) {}

  async onApplicationBootstrap() {
    // await this.updateAppText()
  }

  async getText(): Promise<NewLengPack>{
     const app = await this.appModel.findOne({mainServerAppSettings: 'mainServerAppSettings'}, {text: 1, _id: 0})
     return app.text
  }

  // async getAvailableLenguage(): Promise<NewLengPack>{
  //   const app = await this.appModel.findOne({mainServerAppSettings: 'mainServerAppSettings'}, {text: 1, _id: 0})
  //   return app.text
  // }

  async getMainServerAppSettings(){
    return await this.appModel.findOneAndUpdate({mainServerAppSettings: 'mainServerAppSettings'}, {$inc: {restartCount: 1}, $set: {text: textLib}}, {upsert: true, returnDocument: 'after'})
  }

  async updateAppText(){
    const app = await this.getMainServerAppSettings()
    console.log(app.text)
    const newAppText = await getLenguagesFromAI(false, textArray, lengs, app.text)
    if(JSON.stringify(app.text) !== JSON.stringify(newAppText)){
      await this.appModel.findOneAndUpdate({mainServerAppSettings: 'mainServerAppSettings'}, {text: newAppText})
      console.log('Текс обновлен')
    }
    else{
      console.log('Текст не требует обновления')
    }
  }
    
}
