import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReplySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    order?: true;

    @Field(() => Boolean, {nullable:true})
    fileId?: true;

    @Field(() => Boolean, {nullable:true})
    sectionId?: true;

    @Field(() => Boolean, {nullable:true})
    actorId?: true;

    @Field(() => Boolean, {nullable:true})
    quickReplyId?: true;
}
