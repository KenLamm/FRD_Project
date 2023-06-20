import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('get')
  @UseGuards(JwtGuard)
  async getAllProject(@GetUser('id') userId: number,
  @GetUser('role') role: string) {
    const projectNameId = await this.projectService.getAllProject(userId,role);
    console.log(projectNameId)
    return projectNameId
  }

  @Post('post')
  @UseGuards(JwtGuard)
  async postProject(@Body('name') name: string, @GetUser('id') userId: number) {
    return this.projectService.postProject(name, userId);
  }

  @Delete('delete')
  deleteProject(@Body('id') id: number) {
    return this.projectService.deleteProject(id);
  }
}
