import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeFile } from './type-file.enum';
import { NestedEnumTypeFileNullableFilter } from './nested-enum-type-file-nullable-filter.input';

@InputType()
export class EnumTypeFileNullableFilter {

    @Field(() => TypeFile, {nullable:true})
    equals?: keyof typeof TypeFile;

    @Field(() => [TypeFile], {nullable:true})
    in?: Array<keyof typeof TypeFile>;

    @Field(() => [TypeFile], {nullable:true})
    notIn?: Array<keyof typeof TypeFile>;

    @Field(() => NestedEnumTypeFileNullableFilter, {nullable:true})
    not?: NestedEnumTypeFileNullableFilter;
}
