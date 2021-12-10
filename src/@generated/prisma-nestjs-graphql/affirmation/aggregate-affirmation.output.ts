import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AffirmationCountAggregate } from './affirmation-count-aggregate.output';
import { AffirmationAvgAggregate } from './affirmation-avg-aggregate.output';
import { AffirmationSumAggregate } from './affirmation-sum-aggregate.output';
import { AffirmationMinAggregate } from './affirmation-min-aggregate.output';
import { AffirmationMaxAggregate } from './affirmation-max-aggregate.output';

@ObjectType()
export class AggregateAffirmation {

    @Field(() => AffirmationCountAggregate, {nullable:true})
    _count?: AffirmationCountAggregate;

    @Field(() => AffirmationAvgAggregate, {nullable:true})
    _avg?: AffirmationAvgAggregate;

    @Field(() => AffirmationSumAggregate, {nullable:true})
    _sum?: AffirmationSumAggregate;

    @Field(() => AffirmationMinAggregate, {nullable:true})
    _min?: AffirmationMinAggregate;

    @Field(() => AffirmationMaxAggregate, {nullable:true})
    _max?: AffirmationMaxAggregate;
}
