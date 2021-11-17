import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutUserInput } from './reply-create-without-user.input';
import { ReplyCreateOrConnectWithoutUserInput } from './reply-create-or-connect-without-user.input';
import { ReplyUpsertWithWhereUniqueWithoutUserInput } from './reply-upsert-with-where-unique-without-user.input';
import { ReplyCreateManyUserInputEnvelope } from './reply-create-many-user-input-envelope.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithWhereUniqueWithoutUserInput } from './reply-update-with-where-unique-without-user.input';
import { ReplyUpdateManyWithWhereWithoutUserInput } from './reply-update-many-with-where-without-user.input';
import { ReplyScalarWhereInput } from './reply-scalar-where.input';

@InputType()
export class ReplyUncheckedUpdateManyWithoutUserInput {

    @Field(() => [ReplyCreateWithoutUserInput], {nullable:true})
    create?: Array<ReplyCreateWithoutUserInput>;

    @Field(() => [ReplyCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReplyCreateOrConnectWithoutUserInput>;

    @Field(() => [ReplyUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ReplyUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReplyCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ReplyCreateManyUserInputEnvelope;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    set?: Array<ReplyWhereUniqueInput>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReplyWhereUniqueInput>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    delete?: Array<ReplyWhereUniqueInput>;

    @Field(() => [ReplyWhereUniqueInput], {nullable:true})
    connect?: Array<ReplyWhereUniqueInput>;

    @Field(() => [ReplyUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ReplyUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReplyUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ReplyUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReplyScalarWhereInput>;
}
