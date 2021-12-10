import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AffirmationUpdateWithoutImageInput } from './affirmation-update-without-image.input';
import { AffirmationCreateWithoutImageInput } from './affirmation-create-without-image.input';

@InputType()
export class AffirmationUpsertWithoutImageInput {

    @Field(() => AffirmationUpdateWithoutImageInput, {nullable:false})
    update!: AffirmationUpdateWithoutImageInput;

    @Field(() => AffirmationCreateWithoutImageInput, {nullable:false})
    create!: AffirmationCreateWithoutImageInput;
}
