import { Injectable } from '@nestjs/common';
import { CreateQuickReplyValueInput } from './dto/create-quick-reply-value.input';
import { UpdateQuickReplyValueInput } from './dto/update-quick-reply-value.input';

@Injectable()
export class QuickReplyValuesService {
  create(createQuickReplyValueInput: CreateQuickReplyValueInput) {
    return 'This action adds a new quickReplyValue';
  }

  findAll() {
    return `This action returns all quickReplyValues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quickReplyValue`;
  }

  update(id: number, updateQuickReplyValueInput: UpdateQuickReplyValueInput) {
    return `This action updates a #${id} quickReplyValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} quickReplyValue`;
  }
}
