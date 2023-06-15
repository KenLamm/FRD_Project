import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllProject(userId): Promise<any[]> {
    return this.prismaService.project.findMany(
          {
        where: {
          user_id: userId,
        },
      })
  }


  postProject(name:string): Promise<any> {
    return this.prismaService.project.create({
      data: {
        name: name,
        user_id: 1,
      },
    });
  }


  deleteProject(id: number): Promise<any> {
    return this.prismaService.project.delete({
      where: { id: id },
    });
  }

}
 