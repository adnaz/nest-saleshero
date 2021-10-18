import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyValueCreateManyQuickReplyInput } from './quick-reply-value-create-many-quick-reply.input';

@InputType()
export class QuickReplyValueCreateManyQuickReplyInputEnvelope {

    @Field(() => [QuickReplyValueCreateManyQuickReplyInput], {nullable:false})
    data!: Array<QuickReplyValueCreateManyQuickReplyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
