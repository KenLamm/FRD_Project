import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

<<<<<<< HEAD

=======
>>>>>>> d14cd6cc890b8f1baaa319cef752852d5e4be448
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
