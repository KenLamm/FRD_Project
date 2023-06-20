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
  
  @Get('get/:pid/:cid')
  @UseGuards(JwtGuard)
  async getAllTask(
    @GetUser('id') userId: number,
    @GetUser('role') role:string,
    @Param('pid') projectId: string,
    @Param('cid') categoryId :string
  ): Promise<any[]> {
    return this.taskService.getAllTask(+projectId, +categoryId, userId, role);
  }

  @Patch('update')
  @UseGuards(JwtGuard)
  async updateTask(@Body('id') id: string, @GetUser('id') userId: number) {
    console.log('/task/update id: ', id);
    return this.taskService.updateTask(+id, userId);
  }
  @Post('post/:pid/:cid')
  @UseGuards(JwtGuard)
  async postTask(
    @Param('pid') projectId: string,
    @GetUser('id') userId: number,
    @Body('name') name: string,
    @Param('cid') categoryId: string
  ) {
    return this.taskService.postTask(+projectId, userId, name, +categoryId);
  }
}
