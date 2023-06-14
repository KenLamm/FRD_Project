import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
    constructor(private readonly prismaService: PrismaService){}
    getAllTask(id): Promise<any[]> {
        return this.prismaService.task.findMany({
            where: {
                category_id:id
            }
        });
    }
}
