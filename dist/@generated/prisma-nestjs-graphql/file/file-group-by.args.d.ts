import { FileWhereInput } from './file-where.input';
import { FileOrderByWithAggregationInput } from './file-order-by-with-aggregation.input';
import { FileScalarFieldEnum } from './file-scalar-field.enum';
import { FileScalarWhereWithAggregatesInput } from './file-scalar-where-with-aggregates.input';
import { FileCountAggregateInput } from './file-count-aggregate.input';
import { FileAvgAggregateInput } from './file-avg-aggregate.input';
import { FileSumAggregateInput } from './file-sum-aggregate.input';
import { FileMinAggregateInput } from './file-min-aggregate.input';
import { FileMaxAggregateInput } from './file-max-aggregate.input';
export declare class FileGroupByArgs {
    where?: FileWhereInput;
    orderBy?: Array<FileOrderByWithAggregationInput>;
    by: Array<keyof typeof FileScalarFieldEnum>;
    having?: FileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FileCountAggregateInput;
    _avg?: FileAvgAggregateInput;
    _sum?: FileSumAggregateInput;
    _min?: FileMinAggregateInput;
    _max?: FileMaxAggregateInput;
}
