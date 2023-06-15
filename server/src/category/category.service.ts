import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
    constructor(private readonly prismaService: PrismaService) {}

    getAllCategory(id: number): Promise<any[]> {
        return this.prismaService.category.findMany({
            where: {
                project_id: id,
              },
              select: {
                name: true,
                project_id: true,
              },
            });
          }}