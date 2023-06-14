import {
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Get()
  getAllPhoto() {
    return this.photosService.getAllPhotos();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1 * 1000 * 1000 }),
          new FileTypeValidator({ fileType: /(image\/png|video\/webm)$/i}),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.photosService.postPhotos(file.filename);
  }
}