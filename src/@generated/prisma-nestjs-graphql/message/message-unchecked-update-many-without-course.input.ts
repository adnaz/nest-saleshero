import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutCourseInput } from './message-create-without-course.input';
import { MessageCreateOrConnectWithoutCourseInput } from './message-create-or-connect-without-course.input';
import { MessageUpsertWithWhereUniqueWithoutCourseInput } from './message-upsert-with-where-unique-without-course.input';
import { MessageCreateManyCourseInputEnvelope } from './message-create-many-course-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutCourseInput } from './message-update-with-where-unique-without-course.input';
import { MessageUpdateManyWithWhereWithoutCourseInput } from './message-update-many-with-where-without-course.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUncheckedUpdateManyWithoutCourseInput {

    @Field(() => [MessageCreateWithoutCourseInput], {nullable:true})
    create?: Array<MessageCreateWithoutCourseInput>;

    @Field(() => [MessageCreateOrConnectWithoutCourseInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutCourseInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutCourseInput], {nullable:true})
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutCourseInput>;

    @Field(() => MessageCreateManyCourseInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyCourseInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    set?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    disconnect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    delete?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutCourseInput], {nullable:true})
    update?: Array<MessageUpdateWithWhereUniqueWithoutCourseInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutCourseInput], {nullable:true})
    updateMany?: Array<MessageUpdateManyWithWhereWithoutCourseInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    deleteMany?: Array<MessageScalarWhereInput>;
}
