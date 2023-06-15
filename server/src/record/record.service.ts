import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

// req.user -> uid, role

@Injectable()
export class RecordService {
    constructor(private readonly prismaService:PrismaService){}
    getRecord(): Promise<any>{
        return this.prismaService.record.findMany()
    }
    postRecord(name:string, task_id:number): Promise<any>{
        return this.prismaService.record.create({
            data: {
                user_id: 1,
                name: name,
                task_id: task_id
            }
        })
    }
}