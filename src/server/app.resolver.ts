import { ConfigService } from '@nestjs/config';
import { Query, Resolver } from '@nestjs/graphql';

import { AppService } from './app.service';
import { AppInterface } from './utilities/interfaces/app.interface';

@Resolver(() => AppInterface)
export class AppResolver {
  constructor(private readonly configService: ConfigService, private readonly appService: AppService) {}

  @Query(() => AppInterface, { name: 'config' })
  public config() {
    return {
      language: this.configService.get<string>('app.language'),
      name: this.configService.get<string>('app.name'),
      description: this.configService.get<string>('app.description'),
    };
  }
}
