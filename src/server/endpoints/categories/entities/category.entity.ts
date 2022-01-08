import { Entity, ManyToMany } from 'typeorm';
import { DefaultEndpointEntity } from '../../../utilities/entities/default-endpoint.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Entry } from '../../entries/entities/entry.entity';

@ObjectType()
@Entity('categories')
export class Category extends DefaultEndpointEntity {
  @Field(() => [Entry], { nullable: true })
  @ManyToMany(() => Entry, (entry) => entry.categories)
  public entries: Entry[];
}
