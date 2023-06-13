import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [UserModule, PrismaModule, AuthModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
