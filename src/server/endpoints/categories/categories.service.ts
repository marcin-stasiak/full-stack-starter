import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateCategoryInput } from './interfaces/create-category.input';
import { UpdateCategoryInput } from './interfaces/update-category.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  public async create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    return await this.categoryRepository.save(createCategoryInput);
  }

  public async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  public async findOne(id: string): Promise<Category> {
    return await this.categoryRepository.findOne(id);
  }

  public async update(updateCategoryInput: UpdateCategoryInput) {
    const found = await this.categoryRepository.findOne(updateCategoryInput.id);
    return await this.categoryRepository.save({ ...found, ...updateCategoryInput });
  }

  public async remove(id: string): Promise<Category> {
    const found = await this.categoryRepository.findOne(id);
    if (found) {
      return await this.categoryRepository.remove(found);
    }
  }
}
