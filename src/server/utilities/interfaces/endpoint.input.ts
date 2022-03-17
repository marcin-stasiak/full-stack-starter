import { Field, InputType } from '@nestjs/graphql';

import { IsDefined } from 'class-validator';

@InputType()
export class EndpointInput {
  @Field(() => String, { nullable: true })
  public slug?: string;

  @IsDefined()
  @Field(() => String)
  public title: string;

  @IsDefined()
  @Field(() => String)
  public description: string;

  @Field(() => String, { nullable: true })
  public image?: string;
}
