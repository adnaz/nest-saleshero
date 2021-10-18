import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageCreateWithoutCourseInput } from './message-create-without-course.input';

@InputType()
export class MessageCreateOrConnectWithoutCourseInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutCourseInput, {nullable:false})
    create!: MessageCreateWithoutCourseInput;
}
