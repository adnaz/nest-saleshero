import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AffirmationWhereUniqueInput } from './affirmation-where-unique.input';
import { AffirmationCreateInput } from './affirmation-create.input';
import { AffirmationUpdateInput } from './affirmation-update.input';

@ArgsType()
export class UpsertOneAffirmationArgs {

    @Field(() => AffirmationWhereUniqueInput, {nullable:false})
    where!: AffirmationWhereUniqueInput;

    @Field(() => AffirmationCreateInput, {nullable:false})
    create!: AffirmationCreateInput;

    @Field(() => AffirmationUpdateInput, {nullable:false})
    update!: AffirmationUpdateInput;
}
