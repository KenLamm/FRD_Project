import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAllProject(userId: number,role:string): Promise<any[]> {
    if(role =='manager'){
    return this.prismaService.project.findMany({
      orderBy: {
        updated_at: 'desc',
      },
    });
  }else{
   const userProject = this.prismaService.userProject.findMany({
      where:{
          user_id:userId,
      },
      select: {
          project:{
              select:{
                id:true,
                name:true,
              }
          }
      }
  })
  const projectName = (await userProject).map((userProject)=> userProject.project)
  console.log(projectName)
  return projectName
  }
  }
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
