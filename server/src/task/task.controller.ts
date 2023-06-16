import {
  Controller,
  Param,
  Get,
  Patch,
  Body,
  UseGuards,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get('get/:id')
  @UseGuards(JwtGuard)
  async getAllTask(
    @Param('id') id: string,
    @GetUser('id') userId: number,
  ): Promise<any[]> {
    return this.taskService.getAllTask(+id, userId);
  }

  @Patch('update')
  @UseGuards(JwtGuard)
  async updateTask(@Body('id') id: string, @GetUser('id') userId: number) {
    console.log('/task/update id: ', id);
    return this.taskService.updateTask(+id, userId);
  }
  @Post('post/:id')
  @UseGuards(JwtGuard)
  async postTask(
    @Param('id') id: string,
    @GetUser('id') userId: number,
    @Body('name') name: string,
  ) {
    return this.taskService.postTask(+id, userId, name);
  }
}
