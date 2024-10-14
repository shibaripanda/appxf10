import { Controller, Get } from '@nestjs/common';
// import { CreateFixDto } from './dto/create-fix.dto';
import { FixService } from './fix.service';

@Controller('/api/fix')
export class FixController {

    constructor(private ordersService: FixService){}

    // @UseGuards(JwtAuthGuard)
    // @Post()
    // create(@Body() orderDto: CreateFixDto){
    //     return this.ordersService.createOrder(orderDto)
    // }

    // @UseGuards(JwtAuthGuard)
    // @Get('/fixservicesettings')
    // getFixserviceSettings(){
    //     return this.ordersService.getFixserviceSettings()
    // }

    @Get('/text')
    getText(){
        return this.ordersService.getText()
    }

}
