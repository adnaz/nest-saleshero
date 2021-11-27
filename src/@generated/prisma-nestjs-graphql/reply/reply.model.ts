import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { File } from '../file/file.model';
import { Int } from '@nestjs/graphql';
import { Section } from '../section/section.model';
import { Actor } from '../actor/actor.model';
import { QuickReply } from '../quick-reply/quick-reply.model';

@ObjectType()
export class Reply {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Float, {nullable:true})
    order!: number | null;

    @Field(() => File, {nullable:true})
    file?: File | null;

    @Field(() => Int, {nullable:true})
    fileId!: number | null;

    @Field(() => String, {nullable:true})
    text!: string | null;

    @Field(() => String, {nullable:true})
    reply!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Section, {nullable:true})
    section?: Section | null;

    @Field(() => Int, {nullable:true})
    sectionId!: number | null;

    @Field(() => Actor, {nullable:true})
    user?: Actor | null;

    @Field(() => Int, {nullable:true})
    actorId!: number | null;

    @Field(() => QuickReply, {nullable:true})
    quickReply?: QuickReply | null;

    @Field(() => Int, {nullable:true})
    quickReplyId!: number | null;
}
