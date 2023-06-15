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
<<<<<<< HEAD
    PhotosModule, ProjectModule, PrismaModule, CategoryModule, TaskModule, RecordModule],
=======
    PhotosModule, ProjectModule, PrismaModule, CategoryModule, TaskModule, RecordModule
  ],
>>>>>>> 32cb5c963fc5860a9dfe74509c1912a3f20eb6bd
  controllers: [],
  providers: [],
})
export class AppModule {}
