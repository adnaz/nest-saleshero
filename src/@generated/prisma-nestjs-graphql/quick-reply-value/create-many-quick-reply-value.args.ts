import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyValueCreateManyInput } from './quick-reply-value-create-many.input';

@ArgsType()
export class CreateManyQuickReplyValueArgs {

    @Field(() => [QuickReplyValueCreateManyInput], {nullable:false})
    data!: Array<QuickReplyValueCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
