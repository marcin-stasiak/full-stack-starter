import { Injectable } from '@nestjs/common';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';

@Injectable()
export class EntriesService {
  create(createEntryInput: CreateEntryInput) {
    return 'This action adds a new entry';
  }

  findAll() {
    return `This action returns all entries`;
  }

  findOne(id: string) {
    return `This action returns a #${id} entry`;
  }

  update(id: string, updateEntryInput: UpdateEntryInput) {
    return `This action updates a #${id} entry`;
  }

  remove(id: string) {
    return `This action removes a #${id} entry`;
  }
}
