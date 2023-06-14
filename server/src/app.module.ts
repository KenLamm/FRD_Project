import { Module } from '@nestjs/common';
import { PhotosModule } from './photos/photos.module';
import { ProjectModule } from './project/project.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { TaskModule } from './task/task.module';
import { RecordModule } from './record/record.module';


@Module({
  imports: [PhotosModule, ProjectModule, PrismaModule, CategoryModule, TaskModule, RecordModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
