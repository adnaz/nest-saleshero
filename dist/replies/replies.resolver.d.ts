import { RepliesService } from './replies.service';
import { CreateReplyInput } from './dto/create-reply.input';
import { UpdateReplyInput } from './dto/update-reply.input';
export declare class RepliesResolver {
    private readonly repliesService;
    constructor(repliesService: RepliesService);
    createReply(createReplyInput: CreateReplyInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateReply(updateReplyInput: UpdateReplyInput): string;
    removeReply(id: number): string;
}
