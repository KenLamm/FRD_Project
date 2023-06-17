import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PhotosService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllPhotos(userId:number,recordId:number): Promise<any[]> {
    return this.prismaService.photo.findMany({
      where:{
        record_id:recordId
      }
    });
  }

  postPhotos(filename: string,pictureName: string,pictureDescription: string,userId,recordId:number) {
    console.log("checking for get the data", filename,pictureDescription, pictureName, userId, recordId)
    return this.prismaService.photo.create({
      data: {
        user_id: 1,
        name: pictureName,
        s3_name:filename,
        description:pictureDescription,
        record_id:recordId,
      }
    })

  }
}