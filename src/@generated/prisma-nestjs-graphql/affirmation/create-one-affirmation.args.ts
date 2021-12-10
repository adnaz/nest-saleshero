import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AffirmationCreateInput } from './affirmation-create.input';

@ArgsType()
export class CreateOneAffirmationArgs {

    @Field(() => AffirmationCreateInput, {nullable:false})
    data!: AffirmationCreateInput;
}
