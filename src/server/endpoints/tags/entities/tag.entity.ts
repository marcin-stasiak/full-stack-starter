import { ObjectType, Field, Int } from '@nestjs/graphql';
import { DefaultEndpointEntity } from '../../../utilities/entities/default-endpoint.entity';
import { Entity } from 'typeorm';

@ObjectType()
@Entity('tags')
export class Tag extends DefaultEndpointEntity {}
