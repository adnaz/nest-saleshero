import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuickRepliesService } from './quick-replies.service';
import { QuickReply } from './entities/quick-reply.entity';
import { CreateQuickReplyInput } from './dto/create-quick-reply.input';
import { UpdateQuickReplyInput } from './dto/update-quick-reply.input';

@Resolver(() => QuickReply)
export class QuickRepliesResolver {
  constructor(private readonly quickRepliesService: QuickRepliesService) {}

  @Mutation(() => QuickReply)
  createQuickReply(@Args('createQuickReplyInput') createQuickReplyInput: CreateQuickReplyInput) {
    return this.quickRepliesService.create(createQuickReplyInput);
  }

  @Query(() => [QuickReply], { name: 'quickReplies' })
  findAll() {
    return this.quickRepliesService.findAll();
  }

  @Query(() => QuickReply, { name: 'quickReply' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.quickRepliesService.findOne(id);
  }

  @Mutation(() => QuickReply)
  updateQuickReply(@Args('updateQuickReplyInput') updateQuickReplyInput: UpdateQuickReplyInput) {
    return this.quickRepliesService.update(updateQuickReplyInput.id, updateQuickReplyInput);
  }

  @Mutation(() => QuickReply)
  removeQuickReply(@Args('id', { type: () => Int }) id: number) {
    return this.quickRepliesService.remove(id);
  }
}
