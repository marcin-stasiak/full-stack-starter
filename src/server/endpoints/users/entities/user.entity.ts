import { Field, ObjectType } from '@nestjs/graphql';

import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';

import * as bcrypt from 'bcrypt';

import { DefaultEndpointEntity } from '../../../utilities/default-endpoint.entity';
import { Entry } from '../../entries/entities/entry.entity';

export enum UserRole {
  ADMINISTRATOR = 'administrator',
  CONTRIBUTOR = 'contributor',
  USER = 'user',
  PENDING = 'pending',
}

@ObjectType()
@Entity('users')
export class User extends DefaultEndpointEntity {
  @Field(() => String)
  @Column({ length: 254, select: false })
  public email: string;

  @Field(() => String)
  @Column({ type: 'bytea', select: false })
  public password: string;

  @Field(() => String)
  @Column({ type: 'enum', enum: UserRole, default: UserRole.PENDING })
  public role: UserRole;

  @Field(() => [Entry], { nullable: true })
  @OneToMany(() => Entry, (entry) => entry.author)
  public entries: Entry[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      console.log(this.password);
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(12));
      console.log(this.password);
    }
  }
}
