import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AffirmationUpdateInput } from './affirmation-update.input';
import { AffirmationWhereUniqueInput } from './affirmation-where-unique.input';

@ArgsType()
export class UpdateOneAffirmationArgs {

    @Field(() => AffirmationUpdateInput, {nullable:false})
    data!: AffirmationUpdateInput;

    @Field(() => AffirmationWhereUniqueInput, {nullable:false})
    where!: AffirmationWhereUniqueInput;
}
