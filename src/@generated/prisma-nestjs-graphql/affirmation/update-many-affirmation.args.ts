import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AffirmationUpdateManyMutationInput } from './affirmation-update-many-mutation.input';
import { AffirmationWhereInput } from './affirmation-where.input';

@ArgsType()
export class UpdateManyAffirmationArgs {

    @Field(() => AffirmationUpdateManyMutationInput, {nullable:false})
    data!: AffirmationUpdateManyMutationInput;

    @Field(() => AffirmationWhereInput, {nullable:true})
    where?: AffirmationWhereInput;
}
