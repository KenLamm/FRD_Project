import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) { }
  @UseGuards(JwtGuard)
  @Get('get')
  getAllProject(@GetUser('id') userId: number,) {
    return this.projectService.getAllProject(userId);
  }

  @Post('post')
  async postProject(@Body('name') name: string) {
    return this.projectService.postProject(name,);
  }

  @Delete('delete')
  deleteProject(@Body('id') id: number) {
    return this.projectService.deleteProject(id);
  }
}
