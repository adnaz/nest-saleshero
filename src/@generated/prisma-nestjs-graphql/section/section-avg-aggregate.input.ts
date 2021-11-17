import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SectionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    imageId?: true;

    @Field(() => Boolean, {nullable:true})
    courseId?: true;

    @HideField()
    authorId?: true;
}
