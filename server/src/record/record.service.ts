import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

// req.user -> uid, role

@Injectable()
export class RecordService {
    constructor(private readonly prismaService:PrismaService){

    //     getRecord(id): Promise<any[]> {
    //         const extraWhere = (role !== admin) ? {uid: ...} : {};
    //         return this.prismaService.record.findMany({
    //             where: {
    //                 id: id,
    //                 ...extraWhere
    //             }
    //         })
    //     }
    // }
}
}