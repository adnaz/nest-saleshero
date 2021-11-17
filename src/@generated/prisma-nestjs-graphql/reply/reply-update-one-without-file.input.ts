import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateWithoutFileInput } from './reply-create-without-file.input';
import { ReplyCreateOrConnectWithoutFileInput } from './reply-create-or-connect-without-file.input';
import { ReplyUpsertWithoutFileInput } from './reply-upsert-without-file.input';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyUpdateWithoutFileInput } from './reply-update-without-file.input';

@InputType()
export class ReplyUpdateOneWithoutFileInput {

    @Field(() => ReplyCreateWithoutFileInput, {nullable:true})
    create?: ReplyCreateWithoutFileInput;

    @Field(() => ReplyCreateOrConnectWithoutFileInput, {nullable:true})
    connectOrCreate?: ReplyCreateOrConnectWithoutFileInput;

    @Field(() => ReplyUpsertWithoutFileInput, {nullable:true})
    upsert?: ReplyUpsertWithoutFileInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ReplyWhereUniqueInput, {nullable:true})
    connect?: ReplyWhereUniqueInput;

    @Field(() => ReplyUpdateWithoutFileInput, {nullable:true})
    update?: ReplyUpdateWithoutFileInput;
}
