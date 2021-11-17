import { Injectable } from '@nestjs/common';
import { CreateQuickReplyInput } from './dto/create-quick-reply.input';
import { UpdateQuickReplyInput } from './dto/update-quick-reply.input';

@Injectable()
export class QuickRepliesService {
  create(createQuickReplyInput: CreateQuickReplyInput) {
    return 'This action adds a new quickReply';
  }

  findAll() {
    return `This action returns all quickReplies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quickReply`;
  }

  update(id: number, updateQuickReplyInput: UpdateQuickReplyInput) {
    return `This action updates a #${id} quickReply`;
  }

  remove(id: number) {
    return `This action removes a #${id} quickReply`;
  }
}
