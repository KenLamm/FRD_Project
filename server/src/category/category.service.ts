import { Injectable } from '@nestjs/common';
<<<<<<< HEAD

@Injectable()
export class CategoryService {}
=======
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
    constructor(private readonly prismaService: PrismaService) {}

    getAllCategory(id: number): Promise<any[]> {
        return this.prismaService.category.findMany({
            where:{
                project_id: +id,
            }
        });
    }
}
>>>>>>> d14cd6cc890b8f1baaa319cef752852d5e4be448
