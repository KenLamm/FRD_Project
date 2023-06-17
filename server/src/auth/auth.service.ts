import { PrismaService } from './../prisma/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto';
import { checkPassword } from './hash';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

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
      select: { id: true, username: true, password: true, is_admin: true },
    });

    if (!user || !(await checkPassword(loginDto.password, user.password))) {
      throw new UnauthorizedException();
    }

    console.log('check har', user);
    return this.signToken(user.id, user.username, user.is_admin);
  }

  async signToken(userId: number, username: string, is_admin: boolean) {
    const payload = { userId, username, is_admin };
    console.log(this.config.get('JWT_SECRET'));
    return {
      access_token: await this.jwt.signAsync(payload, {
        expiresIn: '1d',
        secret: this.config.get('JWT_SECRET'),
      }),
    };
  }
}
