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

  public async findOneById(id: string): Promise<Tag | undefined> {
    return await this.tagRepository.findOne({ where: { id: id } });
  }

  public async findOneBySlug(slug: string): Promise<Tag | undefined> {
    return await this.tagRepository.findOne({ where: { slug: slug } });
  }

  public async update(updateTagInput: UpdateTagInput): Promise<Tag | undefined> {
    const found = await this.tagRepository.findOne(updateTagInput.id);

    if (found) {
      return await this.tagRepository.save({ ...found, ...updateTagInput });
    }
  }

  public async remove(id: string): Promise<Tag | undefined> {
    const found = await this.tagRepository.findOne(id);

    if (found) {
      return await this.tagRepository.remove(found);
    }
  }
}
