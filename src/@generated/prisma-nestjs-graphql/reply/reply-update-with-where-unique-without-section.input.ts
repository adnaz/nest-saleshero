import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithoutSectionInput } from './reply-update-without-section.input';

@InputType()
export class ReplyUpdateWithWhereUniqueWithoutSectionInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyUpdateWithoutSectionInput, {nullable:false})
    data!: ReplyUpdateWithoutSectionInput;
}
