import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserProjectService } from './user-project.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@Controller('user-project')
export class UserProjectController {
    constructor(private readonly userProjectService:UserProjectService){}
    @Get('get')
    @UseGuards(JwtGuard)
    async getUserProject(
      @GetUser('id') userId: number,
    ){
      return this.userProjectService.getUserProject(userId);
    }
}
