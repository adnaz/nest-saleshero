import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AffirmationWhereInput } from './affirmation-where.input';
import { AffirmationOrderByWithRelationInput } from './affirmation-order-by-with-relation.input';
import { AffirmationWhereUniqueInput } from './affirmation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AffirmationScalarFieldEnum } from './affirmation-scalar-field.enum';

@ArgsType()
export class FindFirstAffirmationArgs {

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

    @Field(() => [AffirmationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AffirmationScalarFieldEnum>;
}
