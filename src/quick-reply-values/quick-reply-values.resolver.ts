import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuickReplyValuesService } from './quick-reply-values.service';
import { QuickReplyValue } from './entities/quick-reply-value.entity';
import { CreateQuickReplyValueInput } from './dto/create-quick-reply-value.input';
import { UpdateQuickReplyValueInput } from './dto/update-quick-reply-value.input';

@Resolver(() => QuickReplyValue)
export class QuickReplyValuesResolver {
  constructor(private readonly quickReplyValuesService: QuickReplyValuesService) {}

  @Mutation(() => QuickReplyValue)
  createQuickReplyValue(@Args('createQuickReplyValueInput') createQuickReplyValueInput: CreateQuickReplyValueInput) {
    return this.quickReplyValuesService.create(createQuickReplyValueInput);
  }

  @Query(() => [QuickReplyValue], { name: 'quickReplyValues' })
  findAll() {
    return this.quickReplyValuesService.findAll();
  }

  @Query(() => QuickReplyValue, { name: 'quickReplyValue' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.quickReplyValuesService.findOne(id);
  }

  @Mutation(() => QuickReplyValue)
  updateQuickReplyValue(@Args('updateQuickReplyValueInput') updateQuickReplyValueInput: UpdateQuickReplyValueInput) {
    return this.quickReplyValuesService.update(updateQuickReplyValueInput.id, updateQuickReplyValueInput);
  }

  @Mutation(() => QuickReplyValue)
  removeQuickReplyValue(@Args('id', { type: () => Int }) id: number) {
    return this.quickReplyValuesService.remove(id);
  }
}
