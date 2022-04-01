import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './interfaces/create-category.input';
import { UpdateCategoryInput } from './interfaces/update-category.input';

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

  public async findOneById(id: string): Promise<Category | undefined> {
    return await this.categoryRepository.findOne({ where: { id: id } });
  }

  public async findOneBySlug(slug: string): Promise<Category | undefined> {
    return await this.categoryRepository.findOne({ where: { slug: slug } });
  }

  public async update(updateCategoryInput: UpdateCategoryInput): Promise<Category | undefined> {
    const found = await this.categoryRepository.findOne(updateCategoryInput.id);

    if (found) {
      return await this.categoryRepository.save({ ...found, ...updateCategoryInput });
    }
  }

  public async remove(id: string): Promise<Category | undefined> {
    const found = await this.categoryRepository.findOne(id);

    if (found) {
      return await this.categoryRepository.remove(found);
    }
  }
}
