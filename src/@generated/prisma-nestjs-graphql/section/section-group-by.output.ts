import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TypeSection } from '../prisma/type-section.enum';
import { SectionCountAggregate } from './section-count-aggregate.output';
import { SectionAvgAggregate } from './section-avg-aggregate.output';
import { SectionSumAggregate } from './section-sum-aggregate.output';
import { SectionMinAggregate } from './section-min-aggregate.output';
import { SectionMaxAggregate } from './section-max-aggregate.output';

@ObjectType()
export class SectionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    imageId?: number;

    @Field(() => TypeSection, {nullable:true})
    type?: keyof typeof TypeSection;

    @Field(() => Int, {nullable:true})
    courseId?: number;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => SectionCountAggregate, {nullable:true})
    _count?: SectionCountAggregate;

    @Field(() => SectionAvgAggregate, {nullable:true})
    _avg?: SectionAvgAggregate;

    @Field(() => SectionSumAggregate, {nullable:true})
    _sum?: SectionSumAggregate;

    @Field(() => SectionMinAggregate, {nullable:true})
    _min?: SectionMinAggregate;

    @Field(() => SectionMaxAggregate, {nullable:true})
    _max?: SectionMaxAggregate;
}
