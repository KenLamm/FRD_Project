import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { PhotosModule } from './photos/photos.module';
import { ProjectModule } from './project/project.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { TaskModule } from './task/task.module';
import { RecordModule } from './record/record.module';


@Module({
  imports: [PhotosModule, ProjectModule, PrismaModule, CategoryModule, TaskModule, RecordModule],
=======
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }),
    UserModule,
    PrismaModule,
    AuthModule,
  ],
>>>>>>> d14cd6cc890b8f1baaa319cef752852d5e4be448
  controllers: [],
  providers: [],
})
export class AppModule {}
