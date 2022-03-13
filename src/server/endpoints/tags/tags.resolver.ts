import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Tag } from './entities/tag.entity';
import { CreateTagInput } from './interfaces/create-tag.input';
import { UpdateTagInput } from './interfaces/update-tag.input';
import { TagsService } from './tags.service';

@Resolver(() => Tag)
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Mutation(() => Tag)
  public createTag(@Args('createTagInput') createTagInput: CreateTagInput) {
    return this.tagsService.create(createTagInput);
  }

  @Query(() => [Tag])
  public getTags() {
    return this.tagsService.findAll();
  }

  @Query(() => Tag)
  public getTag(@Args('slug', { type: () => String }) slug: string) {
    return this.tagsService.findOneBySlug(slug);
  }

  @Mutation(() => Tag)
  public updateTag(@Args('updateTagInput') updateTagInput: UpdateTagInput) {
    return this.tagsService.update(updateTagInput);
  }

  @Mutation(() => Tag)
  public removeTag(@Args('id', { type: () => String }) id: string) {
    return this.tagsService.remove(id);
  }
}
