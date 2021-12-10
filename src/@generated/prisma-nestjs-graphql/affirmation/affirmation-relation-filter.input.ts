import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AffirmationWhereInput } from './affirmation-where.input';

@InputType()
export class AffirmationRelationFilter {

    @Field(() => AffirmationWhereInput, {nullable:true})
    is?: AffirmationWhereInput;

    @Field(() => AffirmationWhereInput, {nullable:true})
    isNot?: AffirmationWhereInput;
}
