import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AppConfigType {
  @Field(() => String)
  public language: string;

  @Field(() => String)
  public name: string;

  @Field(() => String)
  public description: string;
}
