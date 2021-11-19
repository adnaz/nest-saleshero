import { FindManyQuickReplyArgs } from 'src/@generated/prisma-nestjs-graphql/quick-reply/find-many-quick-reply.args';
import { QuickReplyCreateInput } from 'src/@generated/prisma-nestjs-graphql/quick-reply/quick-reply-create.input';
import { QuickReply } from 'src/@generated/prisma-nestjs-graphql/quick-reply/quick-reply.model';
import { UpdateOneQuickReplyArgs } from 'src/@generated/prisma-nestjs-graphql/quick-reply/update-one-quick-reply.args';
import { UsersService } from 'src/users/users.service';
import { QuickRepliesService } from './quick-replies.service';
export declare class QuickRepliesResolver {
    private quickRepliesService;
    private usersService;
    constructor(quickRepliesService: QuickRepliesService, usersService: UsersService);
    quickReplies(findManyQuickReplyArgs: FindManyQuickReplyArgs): Promise<QuickReply[]>;
    quickReply(id: number): Promise<import(".prisma/client").QuickReply>;
    createQuickReply(quickReplyCreateInput: QuickReplyCreateInput): Promise<import(".prisma/client").QuickReply>;
    updateQuickReply(updateOneQuickReplyArgs: UpdateOneQuickReplyArgs): Promise<import(".prisma/client").QuickReply>;
    removeQuickReply(id: number): Promise<import(".prisma/client").QuickReply>;
}
