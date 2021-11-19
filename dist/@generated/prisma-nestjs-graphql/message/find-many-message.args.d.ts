import { MessageWhereInput } from './message-where.input';
import { MessageOrderByWithRelationInput } from './message-order-by-with-relation.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageScalarFieldEnum } from './message-scalar-field.enum';
export declare class FindManyMessageArgs {
    where?: MessageWhereInput;
    orderBy?: Array<MessageOrderByWithRelationInput>;
    cursor?: MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof MessageScalarFieldEnum>;
}
