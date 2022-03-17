import { Field, ObjectType } from '@nestjs/graphql';

import { BaseEntity, BeforeInsert, BeforeUpdate, Column, PrimaryGeneratedColumn } from 'typeorm';

import slugify from 'slugify';

@ObjectType()
export class EndpointEntity extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field(() => String)
  @Column({ unique: true, length: 120 })
  public slug: string;

  @Field(() => String)
  @Column({ length: 254 })
  public title: string;

  @Field(() => String)
  @Column({ length: 254 })
  public description: string;

  @Field(() => String)
  @Column({ length: 254, default: '' })
  public image?: string;

  @BeforeInsert()
  @BeforeUpdate()
  private createSlug() {
    if (this.slug === '') {
      this.slug = slugify(this.title, { lower: true });
    }
  }
}
