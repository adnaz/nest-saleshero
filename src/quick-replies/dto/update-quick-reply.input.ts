import { CreateQuickReplyInput } from './create-quick-reply.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuickReplyInput extends PartialType(CreateQuickReplyInput) {
  @Field(() => Int)
  id: number;
}
