import { Get, Module, UseGuards } from '@nestjs/common';
import { UserProjectController } from './user-project.controller';
import { UserProjectService } from './user-project.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@Module({
  controllers: [UserProjectController],
  providers: [UserProjectService]
})
export class UserProjectModule {}
