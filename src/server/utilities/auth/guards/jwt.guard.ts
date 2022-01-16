import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from '../auth.service';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  constructor(readonly authService: AuthService) {
    super();
  }

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    return false;
  }
}
