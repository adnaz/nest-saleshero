import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutCourseInput } from './message-update-without-course.input';
import { MessageCreateWithoutCourseInput } from './message-create-without-course.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutCourseInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutCourseInput, {nullable:false})
    update!: MessageUpdateWithoutCourseInput;

    @Field(() => MessageCreateWithoutCourseInput, {nullable:false})
    create!: MessageCreateWithoutCourseInput;
}
