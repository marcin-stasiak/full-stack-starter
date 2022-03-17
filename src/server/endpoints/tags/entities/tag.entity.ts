import { Field, ObjectType } from '@nestjs/graphql';

import { Entity, ManyToMany } from 'typeorm';

import { EndpointEntity } from '../../../utilities/entities/endpoint.entity';
import { Entry } from '../../entries/entities/entry.entity';

@ObjectType()
@Entity('tags')
export class Tag extends EndpointEntity {
  @Field(() => [Entry], { nullable: true })
  @ManyToMany(() => Entry, (entry) => entry.tags)
  public entries: Entry[];
}
