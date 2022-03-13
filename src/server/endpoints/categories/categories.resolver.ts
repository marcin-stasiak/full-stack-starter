import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './interfaces/create-category.input';
import { UpdateCategoryInput } from './interfaces/update-category.input';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => Category)
  public createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => [Category], { name: 'categories' })
  public findAll() {
    return this.categoriesService.findAll();
  }

  @Query(() => Category, { name: 'category' })
  public findOne(@Args('slug', { type: () => String }) slug: string) {
    return this.categoriesService.findOneBySlug(slug);
  }

  @Mutation(() => Category)
  public updateCategory(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput) {
    return this.categoriesService.update(updateCategoryInput);
  }

  @Mutation(() => Category)
  public removeCategory(@Args('id', { type: () => String }) id: string) {
    return this.categoriesService.remove(id);
  }
}
