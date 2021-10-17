import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithoutAuthorInput } from './section-update-without-author.input';
import { SectionCreateWithoutAuthorInput } from './section-create-without-author.input';

@InputType()
export class SectionUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    where!: SectionWhereUniqueInput;

    @Field(() => SectionUpdateWithoutAuthorInput, {nullable:false})
    update!: SectionUpdateWithoutAuthorInput;

    @Field(() => SectionCreateWithoutAuthorInput, {nullable:false})
    create!: SectionCreateWithoutAuthorInput;
}
