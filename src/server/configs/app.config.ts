import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  language: process.env.APP_LANGUAGE || 'en',
  name: process.env.APP_NAME || 'Full Stack Starter',
  description: 'NestJS, TypeORM, NextJS, TailwindCSS',
}));
