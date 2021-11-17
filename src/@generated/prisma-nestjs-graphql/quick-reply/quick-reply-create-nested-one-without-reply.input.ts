import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyCreateWithoutReplyInput } from './quick-reply-create-without-reply.input';
import { QuickReplyCreateOrConnectWithoutReplyInput } from './quick-reply-create-or-connect-without-reply.input';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';

@InputType()
export class QuickReplyCreateNestedOneWithoutReplyInput {

    @Field(() => QuickReplyCreateWithoutReplyInput, {nullable:true})
    create?: QuickReplyCreateWithoutReplyInput;

    @Field(() => QuickReplyCreateOrConnectWithoutReplyInput, {nullable:true})
    connectOrCreate?: QuickReplyCreateOrConnectWithoutReplyInput;

    @Field(() => QuickReplyWhereUniqueInput, {nullable:true})
    connect?: QuickReplyWhereUniqueInput;
}
