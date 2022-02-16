import { InputType } from '@nestjs/graphql';

import { DefaultEndpointInput } from '../../../utilities/interfaces/default-endpoint.input';

@InputType()
export class CreateCategoryInput extends DefaultEndpointInput {}
