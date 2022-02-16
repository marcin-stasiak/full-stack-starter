import { Field, InputType, Int } from '@nestjs/graphql';

import { DefaultEndpointInput } from '../../../utilities/interfaces/default-endpoint.input';

@InputType()
export class CreateTagInput extends DefaultEndpointInput {}
