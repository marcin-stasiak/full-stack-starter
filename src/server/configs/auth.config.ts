import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  secret: process.env.APP_SECRET || 'secret',
}));
