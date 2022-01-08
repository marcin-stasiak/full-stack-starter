import { Column, Entity } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { DefaultEndpointEntity } from '../../../utilities/entities/default-endpoint.entity';

@ObjectType()
@Entity('users')
export class User extends DefaultEndpointEntity {
  @Field(() => String)
  @Column({ length: 254 })
  public email: string;
}
