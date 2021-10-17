import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutAuthorInput } from './section-create-without-author.input';
import { SectionCreateOrConnectWithoutAuthorInput } from './section-create-or-connect-without-author.input';
import { SectionCreateManyAuthorInputEnvelope } from './section-create-many-author-input-envelope.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';

@InputType()
export class SectionUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [SectionCreateWithoutAuthorInput], {nullable:true})
    create?: Array<SectionCreateWithoutAuthorInput>;

    @Field(() => [SectionCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<SectionCreateOrConnectWithoutAuthorInput>;

    @Field(() => SectionCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: SectionCreateManyAuthorInputEnvelope;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    connect?: Array<SectionWhereUniqueInput>;
}
