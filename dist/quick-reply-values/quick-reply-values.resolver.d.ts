import { FindManyQuickReplyValueArgs } from 'src/@generated/prisma-nestjs-graphql/quick-reply-value/find-many-quick-reply-value.args';
import { QuickReplyValueCreateInput } from 'src/@generated/prisma-nestjs-graphql/quick-reply-value/quick-reply-value-create.input';
import { QuickReplyValue } from 'src/@generated/prisma-nestjs-graphql/quick-reply-value/quick-reply-value.model';
import { UpdateOneQuickReplyValueArgs } from 'src/@generated/prisma-nestjs-graphql/quick-reply-value/update-one-quick-reply-value.args';
import { UsersService } from 'src/users/users.service';
import { QuickReplyValuesService } from './quick-reply-values.service';
export declare class QuickReplyValuesResolver {
    private quickReplyValuesService;
    private usersService;
    constructor(quickReplyValuesService: QuickReplyValuesService, usersService: UsersService);
    quickReplyValues(findManyQuickReplyValueArgs: FindManyQuickReplyValueArgs): Promise<QuickReplyValue[]>;
    quickReplyValue(id: number): Promise<import(".prisma/client").QuickReplyValue>;
    createQuickReplyValue(quickReplyValueCreateInput: QuickReplyValueCreateInput): Promise<import(".prisma/client").QuickReplyValue>;
    updateQuickReplyValue(updateOneQuickReplyValueArgs: UpdateOneQuickReplyValueArgs): Promise<import(".prisma/client").QuickReplyValue>;
    removeQuickReplyValue(id: number): Promise<import(".prisma/client").QuickReplyValue>;
}
