import { Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService:ProjectService){}

    @Get('get')
    getAllProject(){
        return this.projectService.getAllProject();
    }

    @Post('post')
    postProject(){
        return this.projectService.postProject();
    }
}
