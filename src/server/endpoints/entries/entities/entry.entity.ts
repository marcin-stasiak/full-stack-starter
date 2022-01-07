import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Entry {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
