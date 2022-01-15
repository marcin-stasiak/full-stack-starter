import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(readonly authService: AuthService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    return false;
  }
}
