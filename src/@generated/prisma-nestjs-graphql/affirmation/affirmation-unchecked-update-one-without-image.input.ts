import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AffirmationCreateWithoutImageInput } from './affirmation-create-without-image.input';
import { AffirmationCreateOrConnectWithoutImageInput } from './affirmation-create-or-connect-without-image.input';
import { AffirmationUpsertWithoutImageInput } from './affirmation-upsert-without-image.input';
import { AffirmationWhereUniqueInput } from './affirmation-where-unique.input';
import { AffirmationUpdateWithoutImageInput } from './affirmation-update-without-image.input';

@InputType()
export class AffirmationUncheckedUpdateOneWithoutImageInput {

    @Field(() => AffirmationCreateWithoutImageInput, {nullable:true})
    create?: AffirmationCreateWithoutImageInput;

    @Field(() => AffirmationCreateOrConnectWithoutImageInput, {nullable:true})
    connectOrCreate?: AffirmationCreateOrConnectWithoutImageInput;

    @Field(() => AffirmationUpsertWithoutImageInput, {nullable:true})
    upsert?: AffirmationUpsertWithoutImageInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AffirmationWhereUniqueInput, {nullable:true})
    connect?: AffirmationWhereUniqueInput;

    @Field(() => AffirmationUpdateWithoutImageInput, {nullable:true})
    update?: AffirmationUpdateWithoutImageInput;
}
