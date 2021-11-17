import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionUpdateWithoutImageInput } from './section-update-without-image.input';
import { SectionCreateWithoutImageInput } from './section-create-without-image.input';

@InputType()
export class SectionUpsertWithoutImageInput {

    @Field(() => SectionUpdateWithoutImageInput, {nullable:false})
    update!: SectionUpdateWithoutImageInput;

    @Field(() => SectionCreateWithoutImageInput, {nullable:false})
    create!: SectionCreateWithoutImageInput;
}
