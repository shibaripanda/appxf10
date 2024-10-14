import { Module, forwardRef } from '@nestjs/common';
import { CampsService } from './camps.service';
import { CampsController } from './camps.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CampSchema } from './camp.model';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: 'Camp', schema: CampSchema }]), forwardRef(() => AuthModule)
  ],
  providers: [CampsService],
  controllers: [CampsController],
  exports: [CampsService]
})
export class CampsModule {}
