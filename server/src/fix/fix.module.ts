import { Module } from '@nestjs/common';
import { FixController } from './fix.controller';
import { FixService } from './fix.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FixSchema } from './fix.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Order', schema: FixSchema }])],
  controllers: [FixController],
  providers: [FixService]
})

export class FixModule {}
