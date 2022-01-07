import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EntriesService } from './entries.service';
import { Entry } from './entities/entry.entity';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';

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
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.entriesService.findOne(id);
  }

  @Mutation(() => Entry)
  updateEntry(@Args('updateEntryInput') updateEntryInput: UpdateEntryInput) {
    return this.entriesService.update(updateEntryInput.id, updateEntryInput);
  }

  @Mutation(() => Entry)
  removeEntry(@Args('id', { type: () => Int }) id: number) {
    return this.entriesService.remove(id);
  }
}
