import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { NewLengPack } from './app.model';
import { lengs } from 'src/modules/lenguages/allText';

@Controller('/api/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/text/')
  async getText(): Promise<NewLengPack>{
    return await this.appService.getText()
  }

  @Get('/avlengs/')
  async getAvailableLanguages(): Promise<object[]> {
    return lengs
  }

}
