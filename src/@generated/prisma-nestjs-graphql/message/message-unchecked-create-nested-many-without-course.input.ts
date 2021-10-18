import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutCourseInput } from './message-create-without-course.input';
import { MessageCreateOrConnectWithoutCourseInput } from './message-create-or-connect-without-course.input';
import { MessageCreateManyCourseInputEnvelope } from './message-create-many-course-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageUncheckedCreateNestedManyWithoutCourseInput {

    @Field(() => [MessageCreateWithoutCourseInput], {nullable:true})
    create?: Array<MessageCreateWithoutCourseInput>;

    @Field(() => [MessageCreateOrConnectWithoutCourseInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutCourseInput>;

    @Field(() => MessageCreateManyCourseInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyCourseInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;
}
