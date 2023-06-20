import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { extname, join } from 'path';
import { diskStorage } from 'multer';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';

export const editFileName = (
  _req: Express.Request,
  file: Express.Multer.File,
  callback: any,
) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(10)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  console.log("randomName",randomName);
  callback(null, `${name}-${randomName}${fileExtName}`);
};

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: "./uploads",
        filename: editFileName,
      }),
    }),
  ],
  providers: [PhotosService],
  controllers: [PhotosController],
})
export class PhotosModule {}