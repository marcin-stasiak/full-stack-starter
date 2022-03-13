import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Entry } from './entities/entry.entity';
import { EntriesService } from './entries.service';
import { CreateEntryInput } from './interfaces/create-entry.input';
import { UpdateEntryInput } from './interfaces/update-entry.input';

@Resolver(() => Entry)
export class EntriesResolver {
  constructor(private readonly entriesService: EntriesService) {}

  @Mutation(() => Entry)
  public createEntry(@Args('createEntryInput') createEntryInput: CreateEntryInput) {
    return this.entriesService.create(createEntryInput);
  }

  @Query(() => [Entry])
  public getEntries() {
    return this.entriesService.findAll();
  }

  @Query(() => Entry)
  public getEntry(@Args('slug', { type: () => String }) slug: string) {
    return this.entriesService.findOneBySlug(slug);
  }

  @Mutation(() => Entry)
  public updateEntry(@Args('updateEntryInput') updateEntryInput: UpdateEntryInput) {
    return this.entriesService.update(updateEntryInput);
  }

  @Mutation(() => Entry)
  public removeEntry(@Args('id', { type: () => String }) id: string) {
    return this.entriesService.remove(id);
  }
}
