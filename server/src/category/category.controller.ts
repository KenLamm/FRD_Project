<<<<<<< HEAD
import { Controller } from '@nestjs/common';

@Controller('category')
export class CategoryController {}
=======
import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get(':id')
  async getAllCategories(@Param('id') id:string): Promise<any[]> {
    return this.categoryService.getAllCategory(+id);
  }
}

// http://localhost:3000/project/1 -> React -> getParams() -> useEffect -> HTTP Request
>>>>>>> d14cd6cc890b8f1baaa319cef752852d5e4be448
