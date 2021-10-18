import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplyUpdateManyMutationInput } from './reply-update-many-mutation.input';
import { ReplyWhereInput } from './reply-where.input';

@ArgsType()
export class UpdateManyReplyArgs {

    @Field(() => ReplyUpdateManyMutationInput, {nullable:false})
    data!: ReplyUpdateManyMutationInput;

    @Field(() => ReplyWhereInput, {nullable:true})
    where?: ReplyWhereInput;
}
