import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Entry } from './entities/entry.entity';
import { EntriesService } from './entries.service';
import { CreateEntryInput } from './interfaces/create-entry.input';
import { UpdateEntryInput } from './interfaces/update-entry.input';

@Resolver(() => Entry)
export class EntriesResolver {
  constructor(private readonly entriesService: EntriesService) {}

  @Mutation(() => Entry)
  createEntry(@Args('createEntryInput') createEntryInput: CreateEntryInput) {
    return this.entriesService.create(createEntryInput);
  }

  @Query(() => [Entry], { name: 'entries' })
  findAll() {
    return this.entriesService.findAll();
  }

  @Query(() => Entry, { name: 'entry' })
  findOne(@Args('slug', { type: () => String }) slug: string) {
    return this.entriesService.findOneBySlug(slug);
  }

  @Mutation(() => Entry)
  updateEntry(@Args('updateEntryInput') updateEntryInput: UpdateEntryInput) {
    return this.entriesService.update(updateEntryInput);
  }

  @Mutation(() => Entry)
  removeEntry(@Args('id', { type: () => String }) id: string) {
    return this.entriesService.remove(id);
  }
}
