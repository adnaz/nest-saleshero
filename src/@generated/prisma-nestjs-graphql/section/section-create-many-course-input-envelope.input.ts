import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateManyCourseInput } from './section-create-many-course.input';

@InputType()
export class SectionCreateManyCourseInputEnvelope {

    @Field(() => [SectionCreateManyCourseInput], {nullable:false})
    data!: Array<SectionCreateManyCourseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
