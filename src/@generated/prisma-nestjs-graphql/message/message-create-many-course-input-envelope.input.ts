import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyCourseInput } from './message-create-many-course.input';

@InputType()
export class MessageCreateManyCourseInputEnvelope {

    @Field(() => [MessageCreateManyCourseInput], {nullable:false})
    data!: Array<MessageCreateManyCourseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
