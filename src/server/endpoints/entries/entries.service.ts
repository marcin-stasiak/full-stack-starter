import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Entry } from './entities/entry.entity';
import { CreateEntryInput } from './interfaces/create-entry.input';
import { UpdateEntryInput } from './interfaces/update-entry.input';

@Injectable()
export class EntriesService {
  constructor(
    @InjectRepository(Entry)
    private readonly entryRepository: Repository<Entry>,
  ) {}

  public async create(createEntryInput: CreateEntryInput): Promise<Entry> {
    return await this.entryRepository.save(createEntryInput);
  }

  public async findAll(): Promise<Entry[]> {
    return await this.entryRepository.find();
  }

  public async findOneById(id: string): Promise<Entry> {
    return await this.entryRepository.findOne(id);
  }

  public async findOneBySlug(slug: string): Promise<Entry> {
    return await this.entryRepository.findOne({ where: { slug: slug } });
  }

  public async update(updateEntryInput: UpdateEntryInput) {
    const found = await this.entryRepository.findOne(updateEntryInput.id);
    return await this.entryRepository.save({ ...found, ...updateEntryInput });
  }

  public async remove(id: string): Promise<Entry> {
    const found = await this.entryRepository.findOne(id);
    if (found) {
      return await this.entryRepository.remove(found);
    }
  }
}
