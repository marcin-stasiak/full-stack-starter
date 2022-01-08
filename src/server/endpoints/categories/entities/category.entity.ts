import { Entity } from 'typeorm';
import { DefaultEndpointEntity } from '../../../utilities/entities/default-endpoint.entity';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('categories')
export class Category extends DefaultEndpointEntity {}
