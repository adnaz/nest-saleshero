import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SectionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    order?: true;

    @Field(() => Boolean, {nullable:true})
    imageId?: true;

    @Field(() => Boolean, {nullable:true})
    courseId?: true;

    @Field(() => Boolean, {nullable:true})
    authorId?: true;
}
