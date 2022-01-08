import { InputType, Int, Field } from '@nestjs/graphql';
import { DefaultEndpointInput } from '../../../utilities/default-endpoint.input';

@InputType()
export class CreateEntryInput extends DefaultEndpointInput {
  @Field(() => String)
  public content: string;
}
