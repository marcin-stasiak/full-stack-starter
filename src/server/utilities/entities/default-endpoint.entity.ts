import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DefaultEndpointEntity extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field(() => String)
  @Column({ unique: true, length: 120 })
  public slug: string;

  @Field(() => String)
  @Column({ length: 254 })
  public title: string;
}
