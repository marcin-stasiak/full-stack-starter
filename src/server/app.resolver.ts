import { ConfigService } from '@nestjs/config';
import { Query, Resolver } from '@nestjs/graphql';

import { AppService } from './app.service';
import { AppConfigType } from './utilities/interfaces/app-config.type';

@Resolver(() => AppConfigType)
export class AppResolver {
  constructor(private readonly configService: ConfigService, private readonly appService: AppService) {}

  @Query(() => AppConfigType, { name: 'config' })
  public config() {
    return {
      language: this.configService.get<string>('app.language'),
      name: this.configService.get<string>('app.name'),
      description: this.configService.get<string>('app.description'),
    };
  }
}
