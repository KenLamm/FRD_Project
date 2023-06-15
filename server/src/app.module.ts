import { Module } from '@nestjs/common';
import { PhotosModule } from './photos/photos.module';
import { ProjectModule } from './project/project.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { TaskModule } from './task/task.module';
import { RecordModule } from './record/record.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }),
    UserModule,
    PrismaModule,
    AuthModule,
    PhotosModule,
    ProjectModule,
    PrismaModule,
    CategoryModule,
    TaskModule,
    RecordModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
