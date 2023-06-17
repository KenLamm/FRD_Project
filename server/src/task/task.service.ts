import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllTask(projectId:number, userId:number, categoryId:number): Promise<any[]> {
    console.log("check task service ", categoryId , projectId)
    return this.prismaService.task.findMany({
      where: {
        category_id: categoryId,
        user_id: userId,
        project_id:projectId
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

  postTask(projectId: number, userId: number, name: string, categoryId:number): Promise<any> {
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
