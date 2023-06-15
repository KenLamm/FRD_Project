import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PhotosService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllPhotos(): Promise<any[]> {
    return this.prismaService.photo.findMany();
  }

  postPhotos(filename: string,pictureName: string,pictureDescription: string) {
    // return this.prismaService.photo.create({
    //   // data: {
      //   user_id: 1,
      //   name: pictureName,
      //   s3_name:filename,
      //   description:pictureDescription,
      //   record_id:1
      // }
    // })
    return {message: "done"}
  }
}