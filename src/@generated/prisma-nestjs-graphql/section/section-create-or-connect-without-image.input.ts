import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionCreateWithoutImageInput } from './section-create-without-image.input';

@InputType()
export class SectionCreateOrConnectWithoutImageInput {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    where!: SectionWhereUniqueInput;

    @Field(() => SectionCreateWithoutImageInput, {nullable:false})
    create!: SectionCreateWithoutImageInput;
}
