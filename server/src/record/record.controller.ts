import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RecordService } from './record.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@Controller('record')
export class RecordController {
    constructor(private readonly recordService: RecordService) { }
    @UseGuards(JwtGuard)
    @Get('get/:id')
    getRecord(@Param("id") id: string,
        @GetUser('id') userId: number,

    ) {
        return this.recordService.getRecord(+id, userId);
    }
    @Post('post')
    @UseGuards(JwtGuard)
    postRecord(
        @GetUser('id') userId: number,
        @Body('name') name: string,
        @Body('task_id') task_id: string,
    ) {
        return this.recordService.postRecord(name, +task_id, +userId);
    }
}
