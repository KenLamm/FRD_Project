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

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}
 
  @Get('get/:id')
  @UseGuards(JwtGuard)
  getAllPhoto(
    @GetUser('id') userId: number,
    @Param('id') recordId:string,
  ) {
    return this.photosService.getAllPhotos(userId,+recordId);
  }

  @Post('upload/:id')
  @UseGuards(JwtGuard)
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
    @Body('pictureName') pictureName: string, 
    @Body('pictureDescription') pictureDescription: string, 
    @GetUser('id') userId: number,
    @Param("id") recordId:string,
  ) {
    return this.photosService.postPhotos(file.filename,pictureName,pictureDescription,userId,+recordId)
  }
}