import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) { }

  @Get('get/:id')
  @UseGuards(JwtGuard)
  getAllPhoto(
    @GetUser('id') userId: number,
    @Param('id') recordId: string,
    @GetUser('role') role:string
  ) {
    return this.photosService.getAllPhotos(userId, +recordId, role,);
  }

  @Post('upload/:id')
  @UseGuards(JwtGuard)
  @UseInterceptors(FileInterceptor('file', {
   dest: "./uploads"
  }))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // new MaxFileSizeValidator({ maxSize: 1 * 1280*1280 }),
          new FileTypeValidator({ fileType: /(image\/png|video\/webm|image\/jpeg)$/i }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body('pictureName') pictureName: string,
    @Body('pictureDescription') pictureDescription: string,
    @GetUser('id') userId: number,
    @Param("id") recordId: string,
  ) {
    return this.photosService.postPhotos(file.filename, pictureName, pictureDescription, userId, +recordId)
  }

  @Get('GetName/:id')
  getRecordName(@Param('id') recordId: string) {
    return this.photosService.getRecordName(+recordId)
  }

}