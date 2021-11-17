import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeFile } from './type-file.enum';
import { NestedEnumTypeFileWithAggregatesFilter } from './nested-enum-type-file-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTypeFileFilter } from './nested-enum-type-file-filter.input';

@InputType()
export class EnumTypeFileWithAggregatesFilter {

    @Field(() => TypeFile, {nullable:true})
    equals?: keyof typeof TypeFile;

    @Field(() => [TypeFile], {nullable:true})
    in?: Array<keyof typeof TypeFile>;

    @Field(() => [TypeFile], {nullable:true})
    notIn?: Array<keyof typeof TypeFile>;

    @Field(() => NestedEnumTypeFileWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTypeFileWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTypeFileFilter, {nullable:true})
    _min?: NestedEnumTypeFileFilter;

    @Field(() => NestedEnumTypeFileFilter, {nullable:true})
    _max?: NestedEnumTypeFileFilter;
}
