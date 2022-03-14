import { Field, ObjectType } from '@nestjs/graphql';

import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class DefaultEndpointEntity extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field(() => String)
  @Column({ unique: true, length: 120 })
  public slug?: string;

  @Field(() => String)
  @Column({ length: 254 })
  public title: string;

  @Field(() => String)
  @Column({ length: 254 })
  public description: string;

  @Field(() => String)
  @Column({ length: 254, nullable: true })
  public image?: string;
}
