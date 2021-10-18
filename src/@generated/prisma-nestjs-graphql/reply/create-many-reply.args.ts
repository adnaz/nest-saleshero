import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyCreateManyInput } from './reply-create-many.input';

@ArgsType()
export class CreateManyReplyArgs {

    @Field(() => [ReplyCreateManyInput], {nullable:false})
    data!: Array<ReplyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
