import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyScalarWhereInput } from './reply-scalar-where.input';
import { ReplyUpdateManyMutationInput } from './reply-update-many-mutation.input';

@InputType()
export class ReplyUpdateManyWithWhereWithoutUserInput {

    @Field(() => ReplyScalarWhereInput, {nullable:false})
    where!: ReplyScalarWhereInput;

    @Field(() => ReplyUpdateManyMutationInput, {nullable:false})
    data!: ReplyUpdateManyMutationInput;
}
