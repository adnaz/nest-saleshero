import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutImageInput } from './section-create-without-image.input';
import { SectionCreateOrConnectWithoutImageInput } from './section-create-or-connect-without-image.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';

@InputType()
export class SectionUncheckedCreateNestedOneWithoutImageInput {

    @Field(() => SectionCreateWithoutImageInput, {nullable:true})
    create?: SectionCreateWithoutImageInput;

    @Field(() => SectionCreateOrConnectWithoutImageInput, {nullable:true})
    connectOrCreate?: SectionCreateOrConnectWithoutImageInput;

    @Field(() => SectionWhereUniqueInput, {nullable:true})
    connect?: SectionWhereUniqueInput;
}
