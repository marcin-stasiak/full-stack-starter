import { CreateUserInput } from '../../endpoints/users/interfaces/create-user.input';
import { AuthService } from './auth.service';

export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  // public register(createUserInput: CreateUserInput) {
  //   return this.authService.register(createUserInput);
  // }
}
