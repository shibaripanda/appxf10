import { Controller, Get, UseGuards, Request, Param, Body, Put } from '@nestjs/common';
import { CampsService } from './camps.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/api')
export class CampsController {

    constructor(private campsService: CampsService){}

    // @UseGuards(JwtAuthGuard)
    // @Post()
    // create(@Body() orderDto: CreateOrderDto){
    //     return this.ordersService.createOrder(orderDto)
    // }

    @UseGuards(JwtAuthGuard)
    @Get('/getmycamps')
    getUsersCamps(@Request() req: any){
        return this.campsService.getUsersCamps(req.user.email)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/getsettingscamp/:campId')
    getSettingsCamp(@Param('campId') campId: string, @Request() req: any){
        return this.campsService.getSettingsCamp(campId, req.user._id)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/updateusersettings/:campId')
    updateUserSettings(@Param('campId') campId: string, @Body() obj: object, @Request() req: any){
        return this.campsService.updateUserSettings(campId, obj, req.user._id)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/updatedocumentsettings/:campId')
    updateDocumentSettings(@Param('campId') campId: string, @Body() obj: object){
        return this.campsService.updateDocumentSettings(campId, obj)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/updategeneralsettings/:campId')
    updateGeneralSettings(@Param('campId') campId: string, @Body() obj: object){
        return this.campsService.updateGeneralSettings(campId, obj)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/addnewusertocamp/:campId')
    addNewUserToCamp(@Param('campId') campId: string, @Body() obj: object){
        return this.campsService.addNewUserToCamp(campId, obj)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/getusersofcamp/:campId')
    getUsersOfCamp(@Param('campId') campId: string){
        return this.campsService.getUsersOfCamp(campId)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/deleteuserfromcamp/:campId')
    deleteUserFromCamp(@Param('campId') campId: string, @Body() obj: object){
        return this.campsService.deleteUserFromCamp(campId, obj)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/edituserrole/:campId')
    editUserRole(@Param('campId') campId: string, @Body() obj: object){
        return this.campsService.editUserRole(campId, obj)
    }
}
