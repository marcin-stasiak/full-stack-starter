import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import createServer from 'next';
import { NextServer } from 'next/dist/server/next';

@Injectable()
export class AppService implements OnModuleInit {
  private server: NextServer;
  private readonly logger: Logger;

  constructor(private readonly configService: ConfigService) {
    this.logger = new Logger(AppService.name);
  }

  public async onModuleInit(): Promise<void> {
    try {
      this.server = createServer({
        dev: this.configService.get<boolean>('development'),
        dir: './src/client',
      });
      await this.server.prepare();
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  public getNextServer(): NextServer {
    return this.server;
  }
}
