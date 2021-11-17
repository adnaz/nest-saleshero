import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CourseAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    audioId?: true;

    @Field(() => Boolean, {nullable:true})
    imageId?: true;

    @HideField()
    authorId?: true;
}
