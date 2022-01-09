import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: !(configService.get<string>('environment') === 'development'),
    }),
  );
  app.use(helmet());

  await app.listen(configService.get<number>('port'));
}
bootstrap();
