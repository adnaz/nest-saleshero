import { CreateQuickReplyValueInput } from './create-quick-reply-value.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuickReplyValueInput extends PartialType(CreateQuickReplyValueInput) {
  @Field(() => Int)
  id: number;
}
