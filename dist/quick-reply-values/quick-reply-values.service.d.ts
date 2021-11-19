import { PrismaService } from '../prisma.service';
import { QuickReplyValue, Prisma } from '@prisma/client';
import { FindManyQuickReplyValueArgs } from 'src/@generated/prisma-nestjs-graphql/quick-reply-value/find-many-quick-reply-value.args';
export declare class QuickReplyValuesService {
    private prisma;
    constructor(prisma: PrismaService);
    quickReplyValue(quickReplyValueWhereUniqueInput: Prisma.QuickReplyValueWhereUniqueInput): Promise<QuickReplyValue | null>;
    quickReplyValues(params: FindManyQuickReplyValueArgs): Promise<QuickReplyValue[]>;
    createQuickReplyValue(data: Prisma.QuickReplyValueCreateInput): Promise<QuickReplyValue>;
    updateQuickReplyValue(params: {
        where: Prisma.QuickReplyValueWhereUniqueInput;
        data: Prisma.QuickReplyValueUpdateInput;
    }): Promise<QuickReplyValue>;
    deleteQuickReplyValue(where: Prisma.QuickReplyValueWhereUniqueInput): Promise<QuickReplyValue>;
}
