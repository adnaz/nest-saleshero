import { MessageWhereInput } from './message-where.input';
import { MessageOrderByWithAggregationInput } from './message-order-by-with-aggregation.input';
import { MessageScalarFieldEnum } from './message-scalar-field.enum';
import { MessageScalarWhereWithAggregatesInput } from './message-scalar-where-with-aggregates.input';
import { MessageCountAggregateInput } from './message-count-aggregate.input';
import { MessageAvgAggregateInput } from './message-avg-aggregate.input';
import { MessageSumAggregateInput } from './message-sum-aggregate.input';
import { MessageMinAggregateInput } from './message-min-aggregate.input';
import { MessageMaxAggregateInput } from './message-max-aggregate.input';
export declare class MessageGroupByArgs {
    where?: MessageWhereInput;
    orderBy?: Array<MessageOrderByWithAggregationInput>;
    by: Array<keyof typeof MessageScalarFieldEnum>;
    having?: MessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageCountAggregateInput;
    _avg?: MessageAvgAggregateInput;
    _sum?: MessageSumAggregateInput;
    _min?: MessageMinAggregateInput;
    _max?: MessageMaxAggregateInput;
}
