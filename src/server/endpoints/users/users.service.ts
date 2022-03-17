import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { CreateUserInput } from './interfaces/create-user.input';
import { UpdateUserInput } from './interfaces/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async create(createUserInput: CreateUserInput): Promise<User> {
    const user = await this.userRepository.create(createUserInput);

    return await this.userRepository.save(user);
  }

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async findOneById(id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  public async findOneBySlug(slug: string): Promise<User> {
    return await this.userRepository.findOne({ where: { slug: slug } });
  }

  public async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email: email } });
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
