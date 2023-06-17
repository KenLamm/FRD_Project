// import { Module } from '@nestjs/common';
// import { CategoryController } from './category.controller';
// import { CategoryService } from './category.service';

// @Module({
//   controllers: [CategoryController],
//   providers: [CategoryService]
// })
// export class CategoryModule {}
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { AuthJwtGuard } from '../AuthJwtGuard';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
