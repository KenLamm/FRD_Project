import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

// req.user -> uid, role

@Injectable()
export class RecordService {
    constructor(private readonly prismaService:PrismaService){}
    getRecord(id:number, userId:number): Promise<any>{
        return this.prismaService.record.findMany({
            where: {
                user_id:userId,
                task_id: id
            }
        })
    }
    postRecord(name:string, task_id:number, userId:number): Promise<any>{
        return this.prismaService.record.create({
            data: {
                user_id: userId,
                name: name,
                task_id: task_id
            }
        })
    }
    getTaskName(taskId:number): Promise<any>{
        return this.prismaService.task.findMany({
            where: {
                id: taskId,
            },
            select: {
                name:true,
            }
        })
    }
}