import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionUpdateWithoutRepliesInput } from './section-update-without-replies.input';
import { SectionCreateWithoutRepliesInput } from './section-create-without-replies.input';

@InputType()
export class SectionUpsertWithoutRepliesInput {

    @Field(() => SectionUpdateWithoutRepliesInput, {nullable:false})
    update!: SectionUpdateWithoutRepliesInput;

    @Field(() => SectionCreateWithoutRepliesInput, {nullable:false})
    create!: SectionCreateWithoutRepliesInput;
}
