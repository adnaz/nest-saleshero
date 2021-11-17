import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyCreateManySectionInput } from './reply-create-many-section.input';

@InputType()
export class ReplyCreateManySectionInputEnvelope {

    @Field(() => [ReplyCreateManySectionInput], {nullable:false})
    data!: Array<ReplyCreateManySectionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
