import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithoutSectionInput } from './reply-update-without-section.input';
import { ReplyCreateWithoutSectionInput } from './reply-create-without-section.input';

@InputType()
export class ReplyUpsertWithWhereUniqueWithoutSectionInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyUpdateWithoutSectionInput, {nullable:false})
    update!: ReplyUpdateWithoutSectionInput;

    @Field(() => ReplyCreateWithoutSectionInput, {nullable:false})
    create!: ReplyCreateWithoutSectionInput;
}
