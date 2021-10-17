import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionCreateWithoutAuthorInput } from './section-create-without-author.input';

@InputType()
export class SectionCreateOrConnectWithoutAuthorInput {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    where!: SectionWhereUniqueInput;

    @Field(() => SectionCreateWithoutAuthorInput, {nullable:false})
    create!: SectionCreateWithoutAuthorInput;
}
