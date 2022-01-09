import { InputType } from '@nestjs/graphql';

import { DefaultEndpointInput } from '../../../utilities/default-endpoint.input';

@InputType()
export class CreateCategoryInput extends DefaultEndpointInput {}
