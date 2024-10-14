import { Controller, Get, UseGuards, Request, Put, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/users')
export class UsersController {

    constructor(private ordersService: UsersService){}


    @UseGuards(JwtAuthGuard)
    @Get()
    getUser(@Request() req: any){
        return this.ordersService.getUser(req.user._id)
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    updateUser(@Request() req: any, @Body() obj: object){
        return this.ordersService.updateUser(req.user._id, obj)
    }
    
}
