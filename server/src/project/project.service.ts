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

  postProject(name: string, userId: number): Promise<any> {
    return this.prismaService.project.create({
      data: {
        name: name,
        user_id: userId,
      },
    });
  }

  deleteProject(id: number): Promise<any> {
    return this.prismaService.project.delete({
      where: { id: id },
    });
  }
}
