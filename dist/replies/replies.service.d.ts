import { CreateReplyInput } from './dto/create-reply.input';
import { UpdateReplyInput } from './dto/update-reply.input';
export declare class RepliesService {
    create(createReplyInput: CreateReplyInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReplyInput: UpdateReplyInput): string;
    remove(id: number): string;
}
