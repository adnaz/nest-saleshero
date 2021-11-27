import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CourseCountAggregate } from './course-count-aggregate.output';
import { CourseAvgAggregate } from './course-avg-aggregate.output';
import { CourseSumAggregate } from './course-sum-aggregate.output';
import { CourseMinAggregate } from './course-min-aggregate.output';
import { CourseMaxAggregate } from './course-max-aggregate.output';

@ObjectType()
export class CourseGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    audioId?: number;

    @Field(() => Int, {nullable:true})
    imageId?: number;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CourseCountAggregate, {nullable:true})
    _count?: CourseCountAggregate;

    @Field(() => CourseAvgAggregate, {nullable:true})
    _avg?: CourseAvgAggregate;

    @Field(() => CourseSumAggregate, {nullable:true})
    _sum?: CourseSumAggregate;

    @Field(() => CourseMinAggregate, {nullable:true})
    _min?: CourseMinAggregate;

    @Field(() => CourseMaxAggregate, {nullable:true})
    _max?: CourseMaxAggregate;
}
