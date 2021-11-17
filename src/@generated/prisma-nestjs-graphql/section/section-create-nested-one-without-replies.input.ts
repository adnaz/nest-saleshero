import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutRepliesInput } from './section-create-without-replies.input';
import { SectionCreateOrConnectWithoutRepliesInput } from './section-create-or-connect-without-replies.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';

@InputType()
export class SectionCreateNestedOneWithoutRepliesInput {

    @Field(() => SectionCreateWithoutRepliesInput, {nullable:true})
    create?: SectionCreateWithoutRepliesInput;

    @Field(() => SectionCreateOrConnectWithoutRepliesInput, {nullable:true})
    connectOrCreate?: SectionCreateOrConnectWithoutRepliesInput;

    @Field(() => SectionWhereUniqueInput, {nullable:true})
    connect?: SectionWhereUniqueInput;
}
