import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllTask(id: number, userId: number): Promise<any[]> {
    return this.prismaService.task.findMany({
      where: {
        category_id: id,
        user_id: userId,
      },
    });
  }
  updateTask(id: number, userId: number): Promise<any> {
    return this.prismaService.task.update({
      where: {
        id: id,
      },
      data: {
        is_finished: true,
      },
    });
  }

  postTask(id: number, userId: number, name: string): Promise<any> {
    return this.prismaService.task.create({
      data: {
        user_id: userId,
        name: name,
        category_id: id,
      },
    });
  }
}
