import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageUncheckedUpdateManyInput } from './message-unchecked-update-many.input';
import { MessageWhereInput } from './message-where.input';

@ArgsType()
export class UpdateManyMessageArgs {

    @Field(() => MessageUncheckedUpdateManyInput, {nullable:false})
    data!: MessageUncheckedUpdateManyInput;

    @Field(() => MessageWhereInput, {nullable:true})
    where?: MessageWhereInput;
}
