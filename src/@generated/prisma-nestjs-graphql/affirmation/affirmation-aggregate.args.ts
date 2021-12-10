import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AffirmationWhereInput } from './affirmation-where.input';
import { AffirmationOrderByWithRelationInput } from './affirmation-order-by-with-relation.input';
import { AffirmationWhereUniqueInput } from './affirmation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AffirmationCountAggregateInput } from './affirmation-count-aggregate.input';
import { AffirmationAvgAggregateInput } from './affirmation-avg-aggregate.input';
import { AffirmationSumAggregateInput } from './affirmation-sum-aggregate.input';
import { AffirmationMinAggregateInput } from './affirmation-min-aggregate.input';
import { AffirmationMaxAggregateInput } from './affirmation-max-aggregate.input';

@ArgsType()
export class AffirmationAggregateArgs {

    @Field(() => AffirmationWhereInput, {nullable:true})
    where?: AffirmationWhereInput;

    @Field(() => [AffirmationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AffirmationOrderByWithRelationInput>;

    @Field(() => AffirmationWhereUniqueInput, {nullable:true})
    cursor?: AffirmationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AffirmationCountAggregateInput, {nullable:true})
    _count?: AffirmationCountAggregateInput;

    @Field(() => AffirmationAvgAggregateInput, {nullable:true})
    _avg?: AffirmationAvgAggregateInput;

    @Field(() => AffirmationSumAggregateInput, {nullable:true})
    _sum?: AffirmationSumAggregateInput;

    @Field(() => AffirmationMinAggregateInput, {nullable:true})
    _min?: AffirmationMinAggregateInput;

    @Field(() => AffirmationMaxAggregateInput, {nullable:true})
    _max?: AffirmationMaxAggregateInput;
}
