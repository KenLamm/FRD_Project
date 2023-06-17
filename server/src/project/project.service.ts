import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllProject(userId: number): Promise<any[]> {
    return this.prismaService.project.findMany({
      orderBy: {
        updated_at: 'desc',
      },
      where: {
        user_id: userId,
      },
    });
  }

  // async postProject(name: string, userId: number): Promise<any> {
  //    const project = await this.prismaService.project.create({
  //     data: {
  //       name: name,
  //       user_id: userId,
  //     },
  //   });
  //     const category = await this.prismaService.category.createMany({
  //       data:[{
  //         project_id: project.id,
  //         name: "地基工程"
  //       },{
  //         project_id: project.id,
  //         name: "主體結構"
  //       },{
  //         project_id: project.id,
  //         name: "建築安裝"
  //       },{
  //         project_id: project.id,
  //         name: "內部裝修"
  //       }],
  //       return [project,category]
  //     })
  // }

  async postProject(name: string, userId: number): Promise<any[]> {
    const project = await this.prismaService.project.create({
      data: {
        name: name,
        user_id: userId,
      },
    });

    const categories = [
      { project_id: project.id, name: '地基工程' },
      { project_id: project.id, name: '主體結構' },
      { project_id: project.id, name: '建築安裝' },
      { project_id: project.id, name: '內部裝修' },
    ];

    const createdCategories = await this.prismaService.category.createMany({
      data: categories,
    });

    return [project, createdCategories];
  }

  deleteProject(id: number): Promise<any> {
    return this.prismaService.project.delete({
      where: { id: id },
    });
  }
}
