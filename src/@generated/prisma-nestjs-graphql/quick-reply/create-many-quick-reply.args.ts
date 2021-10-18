import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyCreateManyInput } from './quick-reply-create-many.input';

@ArgsType()
export class CreateManyQuickReplyArgs {

    @Field(() => [QuickReplyCreateManyInput], {nullable:false})
    data!: Array<QuickReplyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
