import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionCreateWithoutRepliesInput } from './section-create-without-replies.input';

@InputType()
export class SectionCreateOrConnectWithoutRepliesInput {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    where!: SectionWhereUniqueInput;

    @Field(() => SectionCreateWithoutRepliesInput, {nullable:false})
    create!: SectionCreateWithoutRepliesInput;
}
