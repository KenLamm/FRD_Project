import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtStrategy } from './auth/strategy/jwt.strategy'; // 根据您的实际路径进行修改
import { Response } from 'express';

@Injectable()
export class AuthJwtGuard implements CanActivate {
  constructor(private readonly jwtStrategy: JwtStrategy) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse<Response>();

    try {
      const user = await this.jwtStrategy.validate(request.user);
      if (!user) {
        throw new UnauthorizedException('Invalid user');
      }

      // 在此处进行其他验证逻辑，例如检查用户是否有访问权限

      return true;
    } catch (error) {
      response.redirect('/login');
      return false;
    }
  }
}
