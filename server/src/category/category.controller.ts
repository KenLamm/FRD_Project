// import { Controller, Get, Param } from '@nestjs/common';
// import { CategoryService } from './category.service';

// @Controller('category')
// export class CategoryController {
//   constructor(private readonly categoryService: CategoryService) {}

//   @Get('get/:id')
//   async getAllCategories(@Param('id') id:string): Promise<any[]> {
//     return this.categoryService.getAllCategory(+id);
  // }}
  // http://localhost:3000/project/1 -> React -> getParams() -> useEffect -> HTTP Request

  import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('get/:id')
  async getAllCategories(@Param('id') id:string): Promise<any[]> {
    return this.categoryService.getAllCategory(+id);
  }}