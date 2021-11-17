import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { File } from '../file/file.model';
import { Int } from '@nestjs/graphql';
import { Section } from '../section/section.model';
import { Actor } from '../actor/actor.model';
import { QuickReply } from '../quick-reply/quick-reply.model';

@ObjectType()
export class Reply {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => File, {nullable:true})
    file?: File | null;

    @Field(() => Int, {nullable:true})
    fileId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Section, {nullable:false})
    section?: Section;

    @Field(() => Int, {nullable:false})
    sectionId!: number;

    @Field(() => Actor, {nullable:true})
    user?: Actor | null;

    @Field(() => Int, {nullable:true})
    actorId!: number | null;

    @Field(() => QuickReply, {nullable:true})
    quickReplies?: QuickReply | null;

    @Field(() => Int, {nullable:true})
    quickRepliesId!: number | null;
}
