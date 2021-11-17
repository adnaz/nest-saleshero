import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutImageInput } from './section-create-without-image.input';
import { SectionCreateOrConnectWithoutImageInput } from './section-create-or-connect-without-image.input';
import { SectionUpsertWithoutImageInput } from './section-upsert-without-image.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithoutImageInput } from './section-update-without-image.input';

@InputType()
export class SectionUncheckedUpdateOneWithoutImageInput {

    @Field(() => SectionCreateWithoutImageInput, {nullable:true})
    create?: SectionCreateWithoutImageInput;

    @Field(() => SectionCreateOrConnectWithoutImageInput, {nullable:true})
    connectOrCreate?: SectionCreateOrConnectWithoutImageInput;

    @Field(() => SectionUpsertWithoutImageInput, {nullable:true})
    upsert?: SectionUpsertWithoutImageInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SectionWhereUniqueInput, {nullable:true})
    connect?: SectionWhereUniqueInput;

    @Field(() => SectionUpdateWithoutImageInput, {nullable:true})
    update?: SectionUpdateWithoutImageInput;
}
