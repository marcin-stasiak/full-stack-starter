import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.userRepository.save(createUserInput);
  }

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  public async update(updateUserInput: UpdateUserInput): Promise<User> {
    const found = this.userRepository.findOne(updateUserInput.id);
    return await this.userRepository.save({ ...found, ...updateUserInput });
  }

  public async remove(id: string): Promise<User> {
    const found = await this.userRepository.findOne(id);
    if (found) {
      return await this.userRepository.remove(found);
    }
  }
}
