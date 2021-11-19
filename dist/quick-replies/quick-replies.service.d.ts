import { PrismaService } from '../prisma.service';
import { QuickReply, Prisma } from '@prisma/client';
import { FindManyQuickReplyArgs } from 'src/@generated/prisma-nestjs-graphql/quick-reply/find-many-quick-reply.args';
export declare class QuickRepliesService {
    private prisma;
    constructor(prisma: PrismaService);
    quickReply(quickReplyWhereUniqueInput: Prisma.QuickReplyWhereUniqueInput): Promise<QuickReply | null>;
    quickReplies(params: FindManyQuickReplyArgs): Promise<QuickReply[]>;
    createQuickReply(data: Prisma.QuickReplyCreateInput): Promise<QuickReply>;
    updateQuickReply(params: {
        where: Prisma.QuickReplyWhereUniqueInput;
        data: Prisma.QuickReplyUpdateInput;
    }): Promise<QuickReply>;
    deleteQuickReply(where: Prisma.QuickReplyWhereUniqueInput): Promise<QuickReply>;
}
