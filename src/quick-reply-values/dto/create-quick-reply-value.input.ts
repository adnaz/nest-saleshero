import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuickReplyValueInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
