import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CourseMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    order?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    audioId?: true;

    @Field(() => Boolean, {nullable:true})
    imageId?: true;

    @Field(() => Boolean, {nullable:true})
    published?: true;

    @Field(() => Boolean, {nullable:true})
    authorId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
