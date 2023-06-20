import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserProjectService {
    constructor(private readonly prismaService:PrismaService){}
    getUserProject(userId:number): Promise<any>{
        return this.prismaService.userProject.findMany({
            where:{
                user_id:userId,
            },
            select: {
                project:{
                    select:{
                        name:true,
                    }
                }
            }
        })
    }
}
