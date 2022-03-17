import { Field, InputType, Int } from '@nestjs/graphql';

import { EndpointInput } from '../../../utilities/interfaces/endpoint.input';

@InputType()
export class CreateTagInput extends EndpointInput {}
