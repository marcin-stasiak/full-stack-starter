import { Column, Entity, OneToMany } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { DefaultEndpointEntity } from '../../../utilities/entities/default-endpoint.entity';
import { Entry } from '../../entries/entities/entry.entity';

@ObjectType()
@Entity('users')
export class User extends DefaultEndpointEntity {
  @Field(() => String)
  @Column({ length: 254 })
  public email: string;

  @Field(() => [Entry], { nullable: true })
  @OneToMany(() => Entry, (entry) => entry.author)
  public entries: Entry[];
}
