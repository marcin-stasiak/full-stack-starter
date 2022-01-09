import { Field, ObjectType } from '@nestjs/graphql';

import { Entity, ManyToMany } from 'typeorm';

import { DefaultEndpointEntity } from '../../../utilities/default-endpoint.entity';
import { Entry } from '../../entries/entities/entry.entity';

@ObjectType()
@Entity('categories')
export class Category extends DefaultEndpointEntity {
  @Field(() => [Entry], { nullable: true })
  @ManyToMany(() => Entry, (entry) => entry.categories)
  public entries: Entry[];
}
