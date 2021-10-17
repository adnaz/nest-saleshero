import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutAuthorInput } from './section-create-without-author.input';
import { SectionCreateOrConnectWithoutAuthorInput } from './section-create-or-connect-without-author.input';
import { SectionUpsertWithWhereUniqueWithoutAuthorInput } from './section-upsert-with-where-unique-without-author.input';
import { SectionCreateManyAuthorInputEnvelope } from './section-create-many-author-input-envelope.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithWhereUniqueWithoutAuthorInput } from './section-update-with-where-unique-without-author.input';
import { SectionUpdateManyWithWhereWithoutAuthorInput } from './section-update-many-with-where-without-author.input';
import { SectionScalarWhereInput } from './section-scalar-where.input';

@InputType()
export class SectionUpdateManyWithoutAuthorInput {

    @Field(() => [SectionCreateWithoutAuthorInput], {nullable:true})
    create?: Array<SectionCreateWithoutAuthorInput>;

    @Field(() => [SectionCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<SectionCreateOrConnectWithoutAuthorInput>;

    @Field(() => [SectionUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<SectionUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => SectionCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: SectionCreateManyAuthorInputEnvelope;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    connect?: Array<SectionWhereUniqueInput>;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    set?: Array<SectionWhereUniqueInput>;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    disconnect?: Array<SectionWhereUniqueInput>;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    delete?: Array<SectionWhereUniqueInput>;

    @Field(() => [SectionUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<SectionUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [SectionUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<SectionUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [SectionScalarWhereInput], {nullable:true})
    deleteMany?: Array<SectionScalarWhereInput>;
}
