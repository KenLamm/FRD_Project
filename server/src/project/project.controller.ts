import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('get')
  getAllProject() {
    return this.projectService.getAllProject();
  }

  @Post('post')
  async postProject(@Body('name') name: string) {
    return this.projectService.postProject(name);
  }

  @Delete('delete')
  deleteProject(@Body('id') id: number) {
    return this.projectService.deleteProject(id);
  }
}
