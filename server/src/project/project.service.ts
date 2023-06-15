import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllProject(): Promise<any[]> {
    return this.prismaService.project
      .findMany
      //     {
      //   where: {
      //     user_id: 2,
      //   },}
      ();
  }

<<<<<<< HEAD
    postProject(): Promise<any> {
        return this.prismaService.project.create({
            data:{
                name:"123",
                user_id: 1,

            }
        })
    }
=======
  postProject(): Promise<any> {
    return this.prismaService.project.create({
      data: {
        name: '123',
        user_id: 1,
      },
    });
  }
>>>>>>> 32cb5c963fc5860a9dfe74509c1912a3f20eb6bd
}
 