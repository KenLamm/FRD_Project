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
      select: { id: true, username: true, password: true, isAdmin: true },
    });

    if (!user || !(await checkPassword(loginDto.password, user.password))) {
      throw new UnauthorizedException();
    }

    console.log('check har', user);
    return this.signToken(user.id, user.username, user.isAdmin);
  }

  async signToken(userId: number, username: string, isAdmin: boolean) {
    const payload = { userId, username, isAdmin };
    console.log(this.config.get('JWT_SECRET'));
    return {
      access_token: await this.jwt.signAsync(payload, {
        expiresIn: '1d',
        secret: this.config.get('JWT_SECRET'),
      }),
    };
  }
}
