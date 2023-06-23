import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PhotosService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllPhotos(userId: number, recordId: number, role: string): Promise<any[]> {
    if (role == 'manager') {
      return this.prismaService.photo.findMany({
        orderBy: {
          updated_at: 'desc',
        },
        where: {
          record_id: recordId,
        },
      });
    } else {
      return this.prismaService.photo.findMany({
        orderBy: {
          updated_at: 'desc',
        },
        where: {
          record_id: recordId,
          user_id: userId,
        },
      });
    }
  }

  postPhotos(filename: string,pictureName: string,pictureDescription: string,userId:number,recordId:number) {
    console.log("checking for get the data", filename,pictureDescription, pictureName, userId, recordId)
    return this.prismaService.photo.create({
      data: {
        user_id: userId,
        name: pictureName,
        s3_name: filename,
        description: pictureDescription,
        record_id: recordId,
      },
    });
  }
  getRecordName(recordId: number): Promise<any> {
    return this.prismaService.record.findMany({
      where: {
        id: recordId,
      },
      select: {
        name: true,
      },
    });
  }
}
