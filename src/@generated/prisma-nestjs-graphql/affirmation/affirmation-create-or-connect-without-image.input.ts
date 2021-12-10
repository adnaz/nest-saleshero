import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AffirmationWhereUniqueInput } from './affirmation-where-unique.input';
import { AffirmationCreateWithoutImageInput } from './affirmation-create-without-image.input';

@InputType()
export class AffirmationCreateOrConnectWithoutImageInput {

    @Field(() => AffirmationWhereUniqueInput, {nullable:false})
    where!: AffirmationWhereUniqueInput;

    @Field(() => AffirmationCreateWithoutImageInput, {nullable:false})
    create!: AffirmationCreateWithoutImageInput;
}
