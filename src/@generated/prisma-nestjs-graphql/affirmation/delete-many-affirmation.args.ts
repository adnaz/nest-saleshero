import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AffirmationWhereInput } from './affirmation-where.input';

@ArgsType()
export class DeleteManyAffirmationArgs {

    @Field(() => AffirmationWhereInput, {nullable:true})
    where?: AffirmationWhereInput;
}
