import { TypeSection } from '../prisma/type-section.enum';
import { SectionCountAggregate } from './section-count-aggregate.output';
import { SectionAvgAggregate } from './section-avg-aggregate.output';
import { SectionSumAggregate } from './section-sum-aggregate.output';
import { SectionMinAggregate } from './section-min-aggregate.output';
import { SectionMaxAggregate } from './section-max-aggregate.output';
export declare class SectionGroupBy {
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
    _count?: SectionCountAggregate;
    _avg?: SectionAvgAggregate;
    _sum?: SectionSumAggregate;
    _min?: SectionMinAggregate;
    _max?: SectionMaxAggregate;
}
