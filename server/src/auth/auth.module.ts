import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { UsersSchema } from '../users/user.model';
import { CampsModule } from 'src/camps/camps.module';
import { CampSchema } from 'src/camps/camp.model';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({secret: process.env.SECRET_KEY, signOptions: {expiresIn: '24h'}}), 
    MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }, { name: 'Camp', schema: CampSchema }]),
    CampsModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
