import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllTask(id: number): Promise<any[]> {
    return this.prismaService.task.findMany({
      where: {
        category_id: id,
      },
    });
  }
  updateTask(id: number): Promise<any> {
    return this.prismaService.task.update({
      where: {
        id: id,
      },
      data: {
        is_finished: true,
      },
    });
  }
}
