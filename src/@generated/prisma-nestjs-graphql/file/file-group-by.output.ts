import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypeFile } from '../prisma/type-file.enum';
import { FileCountAggregate } from './file-count-aggregate.output';
import { FileAvgAggregate } from './file-avg-aggregate.output';
import { FileSumAggregate } from './file-sum-aggregate.output';
import { FileMinAggregate } from './file-min-aggregate.output';
import { FileMaxAggregate } from './file-max-aggregate.output';

@ObjectType()
export class FileGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    link?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => String, {nullable:true})
    key?: string;

    @Field(() => String, {nullable:true})
    bucket?: string;

    @Field(() => String, {nullable:true})
    etag?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => TypeFile, {nullable:true})
    type?: keyof typeof TypeFile;

    @Field(() => FileCountAggregate, {nullable:true})
    _count?: FileCountAggregate;

    @Field(() => FileAvgAggregate, {nullable:true})
    _avg?: FileAvgAggregate;

    @Field(() => FileSumAggregate, {nullable:true})
    _sum?: FileSumAggregate;

    @Field(() => FileMinAggregate, {nullable:true})
    _min?: FileMinAggregate;

    @Field(() => FileMaxAggregate, {nullable:true})
    _max?: FileMaxAggregate;
}
