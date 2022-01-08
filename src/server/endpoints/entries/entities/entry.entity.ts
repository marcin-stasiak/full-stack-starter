import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@ObjectType()
@Entity('entries')
export class Entry {}
