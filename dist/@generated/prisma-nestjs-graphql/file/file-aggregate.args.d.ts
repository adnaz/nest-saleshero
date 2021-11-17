import { FileWhereInput } from './file-where.input';
import { FileOrderByWithRelationInput } from './file-order-by-with-relation.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCountAggregateInput } from './file-count-aggregate.input';
import { FileAvgAggregateInput } from './file-avg-aggregate.input';
import { FileSumAggregateInput } from './file-sum-aggregate.input';
import { FileMinAggregateInput } from './file-min-aggregate.input';
import { FileMaxAggregateInput } from './file-max-aggregate.input';
export declare class FileAggregateArgs {
    where?: FileWhereInput;
    orderBy?: Array<FileOrderByWithRelationInput>;
    cursor?: FileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: FileCountAggregateInput;
    _avg?: FileAvgAggregateInput;
    _sum?: FileSumAggregateInput;
    _min?: FileMinAggregateInput;
    _max?: FileMaxAggregateInput;
}
