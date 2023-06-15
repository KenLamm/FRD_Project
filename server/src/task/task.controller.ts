import { Controller, Param, Get, Patch, Body } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }
    @Get("get/:id")
    async getAllTask(@Param("id") id: string): Promise<any[]> {
        return this.taskService.getAllTask(+id);
    }

    @Patch('update')
    async updateTask(
        @Body('id') id: string
    ) {
        console.log('/task/update id: ', id)
        return this.taskService.updateTask(+id);
    }   
}
