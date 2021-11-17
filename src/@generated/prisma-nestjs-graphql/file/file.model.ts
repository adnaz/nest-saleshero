import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Reply } from '../reply/reply.model';
import { Actor } from '../actor/actor.model';
import { Course } from '../course/course.model';
import { Section } from '../section/section.model';
import { TypeFile } from '../prisma/type-file.enum';

@ObjectType()
export class File {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    link!: string;

    @Field(() => Reply, {nullable:true})
    reply?: Reply | null;

    @Field(() => Actor, {nullable:true})
    actor?: Actor | null;

    @Field(() => Course, {nullable:true})
    courseImage?: Course | null;

    @Field(() => Course, {nullable:true})
    courseAudio?: Course | null;

    @Field(() => Section, {nullable:true})
    section?: Section | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => TypeFile, {nullable:false})
    type!: keyof typeof TypeFile;
}