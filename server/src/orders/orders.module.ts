import { Module, forwardRef } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './order.model';
import { AuthModule } from 'src/auth/auth.module';
import { CampsModule } from 'src/camps/camps.module';
import { AppModule } from 'src/app.module';
@Module({

  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]), forwardRef(() => AuthModule,), CampsModule, forwardRef(() => AppModule)
  ],
  controllers: [OrdersController],
  providers: [OrdersService]
  
})

export class OrdersModule {}
