import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PhotosService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllPhotos(): Promise<any[]> {
    return this.prismaService.photo.findMany();
  }

  postPhotos(filename: string) {
  //   return this.prismaService.photo.create({
  //     data: {
  //       user_id: 1,
  //       photo_name: filename,
  //       s3_name:"12121212",
  //       description:"1212121212121",
  //       record_id:1
  //     }
  //   })
  // }
  return {message:'done'}
}
}