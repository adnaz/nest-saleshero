import { MessageCreateWithoutCourseInput } from './message-create-without-course.input';
import { MessageCreateOrConnectWithoutCourseInput } from './message-create-or-connect-without-course.input';
import { MessageUpsertWithWhereUniqueWithoutCourseInput } from './message-upsert-with-where-unique-without-course.input';
import { MessageCreateManyCourseInputEnvelope } from './message-create-many-course-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutCourseInput } from './message-update-with-where-unique-without-course.input';
import { MessageUpdateManyWithWhereWithoutCourseInput } from './message-update-many-with-where-without-course.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';
export declare class MessageUncheckedUpdateManyWithoutCourseInput {
    create?: Array<MessageCreateWithoutCourseInput>;
    connectOrCreate?: Array<MessageCreateOrConnectWithoutCourseInput>;
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutCourseInput>;
    createMany?: MessageCreateManyCourseInputEnvelope;
    connect?: Array<MessageWhereUniqueInput>;
    set?: Array<MessageWhereUniqueInput>;
    disconnect?: Array<MessageWhereUniqueInput>;
    delete?: Array<MessageWhereUniqueInput>;
    update?: Array<MessageUpdateWithWhereUniqueWithoutCourseInput>;
    updateMany?: Array<MessageUpdateManyWithWhereWithoutCourseInput>;
    deleteMany?: Array<MessageScalarWhereInput>;
}
