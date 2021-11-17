import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyCreateWithoutSectionInput } from './reply-create-without-section.input';

@InputType()
export class ReplyCreateOrConnectWithoutSectionInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyCreateWithoutSectionInput, {nullable:false})
    create!: ReplyCreateWithoutSectionInput;
}
