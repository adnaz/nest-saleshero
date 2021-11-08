import { MessageWhereInput } from './message-where.input';
import { MessageOrderByWithRelationInput } from './message-order-by-with-relation.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageCountAggregateInput } from './message-count-aggregate.input';
import { MessageAvgAggregateInput } from './message-avg-aggregate.input';
import { MessageSumAggregateInput } from './message-sum-aggregate.input';
import { MessageMinAggregateInput } from './message-min-aggregate.input';
import { MessageMaxAggregateInput } from './message-max-aggregate.input';
export declare class MessageAggregateArgs {
    where?: MessageWhereInput;
    orderBy?: Array<MessageOrderByWithRelationInput>;
    cursor?: MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: MessageCountAggregateInput;
    _avg?: MessageAvgAggregateInput;
    _sum?: MessageSumAggregateInput;
    _min?: MessageMinAggregateInput;
    _max?: MessageMaxAggregateInput;
}
