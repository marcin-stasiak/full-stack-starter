import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Entry } from './entities/entry.entity';
import { EntriesService } from './entries.service';
import { EntriesResolver } from './entries.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Entry])],
  exports: [EntriesService],
  providers: [EntriesResolver, EntriesService],
})
export class EntriesModule {}
