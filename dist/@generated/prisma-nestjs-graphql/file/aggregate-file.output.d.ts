import { FileCountAggregate } from './file-count-aggregate.output';
import { FileAvgAggregate } from './file-avg-aggregate.output';
import { FileSumAggregate } from './file-sum-aggregate.output';
import { FileMinAggregate } from './file-min-aggregate.output';
import { FileMaxAggregate } from './file-max-aggregate.output';
export declare class AggregateFile {
    _count?: FileCountAggregate;
    _avg?: FileAvgAggregate;
    _sum?: FileSumAggregate;
    _min?: FileMinAggregate;
    _max?: FileMaxAggregate;
}
