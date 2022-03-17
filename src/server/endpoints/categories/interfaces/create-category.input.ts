import { InputType } from '@nestjs/graphql';

import { EndpointInput } from '../../../utilities/interfaces/endpoint.input';

@InputType()
export class CreateCategoryInput extends EndpointInput {}
