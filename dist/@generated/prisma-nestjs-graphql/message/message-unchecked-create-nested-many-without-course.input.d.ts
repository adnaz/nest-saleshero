import { MessageCreateWithoutCourseInput } from './message-create-without-course.input';
import { MessageCreateOrConnectWithoutCourseInput } from './message-create-or-connect-without-course.input';
import { MessageCreateManyCourseInputEnvelope } from './message-create-many-course-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
export declare class MessageUncheckedCreateNestedManyWithoutCourseInput {
    create?: Array<MessageCreateWithoutCourseInput>;
    connectOrCreate?: Array<MessageCreateOrConnectWithoutCourseInput>;
    createMany?: MessageCreateManyCourseInputEnvelope;
    connect?: Array<MessageWhereUniqueInput>;
}
