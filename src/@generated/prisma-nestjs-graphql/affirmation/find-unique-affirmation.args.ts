import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AffirmationWhereUniqueInput } from './affirmation-where-unique.input';

@ArgsType()
export class FindUniqueAffirmationArgs {

    @Field(() => AffirmationWhereUniqueInput, {nullable:false})
    where!: AffirmationWhereUniqueInput;
}
