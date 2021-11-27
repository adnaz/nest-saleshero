import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReplyCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    order?: true;

    @Field(() => Boolean, {nullable:true})
    fileId?: true;

    @Field(() => Boolean, {nullable:true})
    text?: true;

    @Field(() => Boolean, {nullable:true})
    reply?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    sectionId?: true;

    @Field(() => Boolean, {nullable:true})
    actorId?: true;

    @Field(() => Boolean, {nullable:true})
    quickReplyId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
