import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutRepliesInput } from './section-create-without-replies.input';
import { SectionCreateOrConnectWithoutRepliesInput } from './section-create-or-connect-without-replies.input';
import { SectionUpsertWithoutRepliesInput } from './section-upsert-without-replies.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithoutRepliesInput } from './section-update-without-replies.input';

@InputType()
export class SectionUpdateOneRequiredWithoutRepliesInput {

    @Field(() => SectionCreateWithoutRepliesInput, {nullable:true})
    create?: SectionCreateWithoutRepliesInput;

    @Field(() => SectionCreateOrConnectWithoutRepliesInput, {nullable:true})
    connectOrCreate?: SectionCreateOrConnectWithoutRepliesInput;

    @Field(() => SectionUpsertWithoutRepliesInput, {nullable:true})
    upsert?: SectionUpsertWithoutRepliesInput;

    @Field(() => SectionWhereUniqueInput, {nullable:true})
    connect?: SectionWhereUniqueInput;

    @Field(() => SectionUpdateWithoutRepliesInput, {nullable:true})
    update?: SectionUpdateWithoutRepliesInput;
}
