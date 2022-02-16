import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DefaultEndpointInput {
  @Field(() => String, { nullable: true })
  public slug: string;

  @Field(() => String)
  public title: string;

  @Field(() => String)
  public description: string;

  @Field(() => String, { nullable: true })
  public image: string;
}
