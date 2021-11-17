import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyUpdateWithoutFileInput } from './reply-update-without-file.input';
import { ReplyCreateWithoutFileInput } from './reply-create-without-file.input';

@InputType()
export class ReplyUpsertWithoutFileInput {

    @Field(() => ReplyUpdateWithoutFileInput, {nullable:false})
    update!: ReplyUpdateWithoutFileInput;

    @Field(() => ReplyCreateWithoutFileInput, {nullable:false})
    create!: ReplyCreateWithoutFileInput;
}
