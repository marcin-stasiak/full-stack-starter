import { Field, ObjectType } from '@nestjs/graphql';

import { Entity, ManyToMany } from 'typeorm';

import { EndpointEntity } from '../../../utilities/entities/endpoint.entity';
import { Entry } from '../../entries/entities/entry.entity';

@ObjectType()
@Entity('categories')
export class Category extends EndpointEntity {
  @Field(() => [Entry], { nullable: true })
  @ManyToMany(() => Entry, (entry) => entry.categories)
  public entries: Entry[];
}
