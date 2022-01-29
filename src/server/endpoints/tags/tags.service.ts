import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Tag } from './entities/tag.entity';
import { CreateTagInput } from './interfaces/create-tag.input';
import { UpdateTagInput } from './interfaces/update-tag.input';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  public async create(createTagInput: CreateTagInput): Promise<Tag> {
    return await this.tagRepository.save(createTagInput);
  }

  public async findAll(): Promise<Tag[]> {
    return await this.tagRepository.find();
  }

  public async findOne(id: string): Promise<Tag> {
    return await this.tagRepository.findOne(id);
  }

  public async update(updateTagInput: UpdateTagInput) {
    const found = await this.tagRepository.findOne(updateTagInput.id);
    return await this.tagRepository.save({ ...found, ...updateTagInput });
  }

  public async remove(id: string): Promise<Tag> {
    const found = await this.tagRepository.findOne(id);
    if (found) {
      return await this.tagRepository.remove(found);
    }
  }
}
