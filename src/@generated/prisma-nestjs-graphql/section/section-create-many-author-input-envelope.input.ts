import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateManyAuthorInput } from './section-create-many-author.input';

@InputType()
export class SectionCreateManyAuthorInputEnvelope {

    @Field(() => [SectionCreateManyAuthorInput], {nullable:false})
    data!: Array<SectionCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
