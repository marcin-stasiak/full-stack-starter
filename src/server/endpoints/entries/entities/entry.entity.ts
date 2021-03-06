import { Field, ObjectType } from '@nestjs/graphql';

import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

import { EndpointEntity } from '../../../utilities/entities/endpoint.entity';
import { Category } from '../../categories/entities/category.entity';
import { Tag } from '../../tags/entities/tag.entity';
import { User } from '../../users/entities/user.entity';

@ObjectType()
@Entity('entries')
export class Entry extends EndpointEntity {
  @Field(() => String)
  @Column({ type: 'text' })
  public content: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.entries)
  public author: User;

  @Field(() => [Category], { nullable: true })
  @ManyToMany(() => Category, (category) => category.entries)
  @JoinTable({ name: 'entries_categories' })
  public categories: Category[];

  @Field(() => [Tag], { nullable: true })
  @ManyToMany(() => Tag, (tag) => tag.entries)
  @JoinTable({ name: 'entries_tags' })
  public tags: Tag[];
}
