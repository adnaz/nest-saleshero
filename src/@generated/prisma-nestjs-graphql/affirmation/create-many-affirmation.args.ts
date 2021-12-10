import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AffirmationCreateManyInput } from './affirmation-create-many.input';

@ArgsType()
export class CreateManyAffirmationArgs {

    @Field(() => [AffirmationCreateManyInput], {nullable:false})
    data!: Array<AffirmationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
