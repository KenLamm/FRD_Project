import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { AuthJwtGuard } from 'src/AuthJwtGuard';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('get/:id')
  async getAllCategories(@Param('id') id: string): Promise<any[]> {
    return this.categoryService.getAllCategory(+id);
  }
}

