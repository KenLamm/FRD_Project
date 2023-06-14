import { Controller, Param, Get } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService:TaskService){}
    @Get(":id")
    async getAllTask(@Param("id") id: number): Promise<any[]>{
        return this.taskService.getAllTask(id)
    }
}
