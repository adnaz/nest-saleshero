import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AffirmationCreateWithoutImageInput } from './affirmation-create-without-image.input';
import { AffirmationCreateOrConnectWithoutImageInput } from './affirmation-create-or-connect-without-image.input';
import { AffirmationWhereUniqueInput } from './affirmation-where-unique.input';

@InputType()
export class AffirmationUncheckedCreateNestedOneWithoutImageInput {

    @Field(() => AffirmationCreateWithoutImageInput, {nullable:true})
    create?: AffirmationCreateWithoutImageInput;

    @Field(() => AffirmationCreateOrConnectWithoutImageInput, {nullable:true})
    connectOrCreate?: AffirmationCreateOrConnectWithoutImageInput;

    @Field(() => AffirmationWhereUniqueInput, {nullable:true})
    connect?: AffirmationWhereUniqueInput;
}
