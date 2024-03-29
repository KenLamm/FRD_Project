import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getSelfInfo(userId: number) {
    const foundUser = await this.prismaService.user.findUnique({
      where: { id: userId },
      select: { id: true, username: true, role:true },
    });
    return foundUser;
  }
}
