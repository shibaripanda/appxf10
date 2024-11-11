import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { App } from './app.model';
import { Model } from 'mongoose';
import { getLenguagesFromAI } from 'src/modules/lenguages/lengPackUpdate';
import { lengs, textArray } from 'src/modules/lenguages/allText';

@Injectable()
export class AppService {

  constructor(
    @InjectModel('App') private appModel: Model<App>) {}

  async onApplicationBootstrap() {
    await this.updateAppText()
  }

  async getMainServerAppSettings(){
    return await this.appModel.findOneAndUpdate({mainServerAppSettings: 'mainServerAppSettings'}, {$inc: {restartCount: 1}}, {upsert: true, returnDocument: 'after'})
  }

  async updateAppText(){
    const app = await this.getMainServerAppSettings()
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
