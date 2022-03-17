import { Field, ObjectType } from '@nestjs/graphql';

import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';

import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';

import { EndpointEntity } from '../../../utilities/entities/endpoint.entity';
import { Entry } from '../../entries/entities/entry.entity';

export enum UserRole {
  ADMINISTRATOR = 'administrator',
  CONTRIBUTOR = 'contributor',
  USER = 'user',
  PENDING = 'pending',
}

@ObjectType()
@Entity('users')
export class User extends EndpointEntity {
  @Field(() => String)
  @Column({ length: 32, unique: true })
  public username: string;

  @Field(() => String)
  @Column({ length: 254, unique: true, select: false })
  public email: string;

  @Field(() => String)
  @Column({ length: 64, select: false })
  public password: string;

  @Field(() => String)
  @Column({ type: 'enum', enum: UserRole, default: UserRole.PENDING })
  public role: UserRole;

  @Field(() => [Entry], { nullable: true })
  @OneToMany(() => Entry, (entry) => entry.author)
  public entries: Entry[];

  @BeforeInsert()
  @BeforeUpdate()
  private hashPassword() {
    this.password = bcrypt.hashSync(this.password, 12);
  }
}
