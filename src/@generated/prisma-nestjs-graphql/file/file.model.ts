import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Reply } from '../reply/reply.model';
import { Actor } from '../actor/actor.model';
import { Affirmation } from '../affirmation/affirmation.model';
import { Course } from '../course/course.model';
import { Section } from '../section/section.model';
import { TypeFile } from '../prisma/type-file.enum';

@ObjectType()
export class File {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    link!: string | null;

    @Field(() => String, {nullable:true})
    location!: string | null;

    @Field(() => String, {nullable:true})
    key!: string | null;

    @Field(() => String, {nullable:true})
    bucket!: string | null;

    @Field(() => String, {nullable:true})
    etag!: string | null;

    @Field(() => Reply, {nullable:true})
    reply?: Reply | null;

    @Field(() => Actor, {nullable:true})
    actor?: Actor | null;

    @Field(() => Affirmation, {nullable:true})
    affirmation?: Affirmation | null;

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

    @Field(() => TypeFile, {nullable:true})
    type!: keyof typeof TypeFile | null;
}
