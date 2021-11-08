import { TypeSection } from '../prisma/type-section.enum';
import { MessageCountAggregate } from './message-count-aggregate.output';
import { MessageAvgAggregate } from './message-avg-aggregate.output';
import { MessageSumAggregate } from './message-sum-aggregate.output';
import { MessageMinAggregate } from './message-min-aggregate.output';
import { MessageMaxAggregate } from './message-max-aggregate.output';
export declare class MessageGroupBy {
    id: number;
    title: string;
    description?: string;
    image?: string;
    type?: keyof typeof TypeSection;
    courseId?: number;
    published?: boolean;
    authorId?: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: MessageCountAggregate;
    _avg?: MessageAvgAggregate;
    _sum?: MessageSumAggregate;
    _min?: MessageMinAggregate;
    _max?: MessageMaxAggregate;
}
