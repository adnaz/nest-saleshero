import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutCourseInput } from './message-update-without-course.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutCourseInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutCourseInput, {nullable:false})
    data!: MessageUpdateWithoutCourseInput;
}
