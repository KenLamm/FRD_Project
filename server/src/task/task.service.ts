import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllTask(
    projectId: number,
    categoryId: number,
    userId: number,
    role: string,
  ): Promise<any[]> {
    if (role == 'manager') {
      return this.prismaService.task.findMany({
        orderBy: {
          updated_at: 'desc',
        },
        where: {
          category_id: categoryId,
          project_id: projectId,
        },
      });
    } else {
      return this.prismaService.task.findMany({
        orderBy: {
          updated_at: 'desc',
        },
        where: {
          category_id: categoryId,
          project_id: projectId,
          user_id: userId,
        },
      });
    }
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

  postTask(
    projectId: number,
    userId: number,
    name: string,
    categoryId: number,
  ): Promise<any> {
    return this.prismaService.task.create({
      data: {
        user_id: userId,
        name: name,
        category_id: categoryId,
        project_id: projectId,
      },
    });
  }
}
