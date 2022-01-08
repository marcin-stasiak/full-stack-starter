import { InputType, Field } from '@nestjs/graphql';
import { DefaultEndpointInput } from '../../../utilities/default-endpoint.input';

@InputType()
export class CreateUserInput extends DefaultEndpointInput {
  @Field(() => String)
  public email: string;
}
