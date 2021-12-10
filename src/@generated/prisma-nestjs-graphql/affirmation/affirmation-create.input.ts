import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutAffirmationInput } from '../file/file-create-nested-one-without-affirmation.input';

@InputType()
export class AffirmationCreateInput {

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FileCreateNestedOneWithoutAffirmationInput, {nullable:true})
    image?: FileCreateNestedOneWithoutAffirmationInput;
}
