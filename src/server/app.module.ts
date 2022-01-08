import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import appConfig from './configs/app.config';
import authConfig from './configs/auth.config';
import databaseConfig from './configs/database.config';
import serverConfig from './configs/server.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './endpoints/categories/categories.module';
import { EntriesModule } from './endpoints/entries/entries.module';
import { TagsModule } from './endpoints/tags/tags.module';
import { UsersModule } from './endpoints/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, authConfig, databaseConfig, serverConfig],
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        autoSchemaFile: 'src/schema.gql',
        debug: configService.get<string>('environment') === 'development',
        playground: configService.get<string>('environment') === 'development',
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        database: configService.get<string>('database.name'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
        autoLoadEntities: true,
        synchronize: true,
        logging: configService.get<string>('environment') === 'development',
      }),
      inject: [ConfigService],
    }),
    CategoriesModule,
    EntriesModule,
    TagsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
