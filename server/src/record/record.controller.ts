import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecordService } from './record.service';

@Controller('record')
export class RecordController {
    constructor(private readonly recordService:RecordService){}
    @Get('get')
    getRecord(){
        return this.recordService.getRecord();
    }
    @Post('post')
    postRecord(
        @Body('name') name:string,
        @Body('task_id') task_id:string,
    ){
        return this.recordService.postRecord(name, +task_id);
    }
}
