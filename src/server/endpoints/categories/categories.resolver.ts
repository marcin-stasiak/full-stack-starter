import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthGuard } from '../../utilities/auth/guards/auth.guard';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './interfaces/create-category.input';
import { UpdateCategoryInput } from './interfaces/update-category.input';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => Category)
  public createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => [Category])
  public getCategories() {
    return this.categoriesService.findAll();
  }

  @Query(() => Category)
  public getCategory(@Args('slug', { type: () => String }) slug: string) {
    return this.categoriesService.findOneBySlug(slug);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Category)
  public updateCategory(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput) {
    return this.categoriesService.update(updateCategoryInput);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Category)
  public removeCategory(@Args('id', { type: () => String }) id: string) {
    return this.categoriesService.remove(id);
  }
}
