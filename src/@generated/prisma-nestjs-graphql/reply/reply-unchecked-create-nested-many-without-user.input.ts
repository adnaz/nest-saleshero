import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutUserInput } from './reply-create-without-user.input';
import { ReplyCreateOrConnectWithoutUserInput } from './reply-create-or-connect-without-user.input';
import { ReplyCreateManyUserInputEnvelope } from './reply-create-many-user-input-envelope.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';

@InputType()
export class ReplyUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ReplyCreateWithoutUserInput], {nullable:true})
    create?: Array<ReplyCreateWithoutUserInput>;

    @Field(() => [ReplyCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutUserInput>;

    @Field(() => ReplyCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ReplyCreateManyUserInputEnvelope;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    connect?: Array<ReplyWhereUniqueInput>;
}
