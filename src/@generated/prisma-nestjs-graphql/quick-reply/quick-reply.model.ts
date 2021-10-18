import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TypeReply } from '../prisma/type-reply.enum';
import { QuickReplyValue } from '../quick-reply-value/quick-reply-value.model';
import { QuickReplyCount } from './quick-reply-count.output';

@ObjectType()
export class QuickReply {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => TypeReply, {nullable:false})
    type!: keyof typeof TypeReply;

    @Field(() => [QuickReplyValue], {nullable:true})
    values?: Array<QuickReplyValue>;

    @Field(() => QuickReplyCount, {nullable:true})
    _count?: QuickReplyCount | null;
}
