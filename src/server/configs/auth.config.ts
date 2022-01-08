import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  name: process.env.APP_NAME || 'Starter',
}));
