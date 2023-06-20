import { PrismaService } from './../prisma/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto';
import { checkPassword } from './hash';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async login(loginDto: LoginDto) {
    const user: any = await this.prisma.user.findFirst({
      where: { username: loginDto.username },
      select: { id: true, username: true, password: true, is_admin: true, role: true },
    });

    if (!user || !(await checkPassword(loginDto.password, user.password))) {
      throw new UnauthorizedException();
    }

    console.log('check har', user);
    return this.signToken(user.id, user.username, user.is_admin, user.role);
  }

  async signToken(userId: number, username: string, is_admin: boolean, role:string) {
    const payload = { userId, username, is_admin, role };
    console.log(this.config.get('JWT_SECRET'));
    console.log(payload)
    return {
      access_token: await this.jwt.signAsync(payload, {
        expiresIn: '1d',
        secret: this.config.get('JWT_SECRET'),
      }),
    };
  }
}
