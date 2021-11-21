"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTypeFileNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_file_enum_1 = require("./type-file.enum");
const nested_enum_type_file_nullable_with_aggregates_filter_input_1 = require("./nested-enum-type-file-nullable-with-aggregates-filter.input");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_enum_type_file_nullable_filter_input_1 = require("./nested-enum-type-file-nullable-filter.input");
let EnumTypeFileNullableWithAggregatesFilter = class EnumTypeFileNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], EnumTypeFileNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_file_enum_1.TypeFile], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumTypeFileNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_file_enum_1.TypeFile], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumTypeFileNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_file_nullable_with_aggregates_filter_input_1.NestedEnumTypeFileNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_file_nullable_with_aggregates_filter_input_1.NestedEnumTypeFileNullableWithAggregatesFilter)
], EnumTypeFileNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], EnumTypeFileNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_file_nullable_filter_input_1.NestedEnumTypeFileNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_file_nullable_filter_input_1.NestedEnumTypeFileNullableFilter)
], EnumTypeFileNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_file_nullable_filter_input_1.NestedEnumTypeFileNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_file_nullable_filter_input_1.NestedEnumTypeFileNullableFilter)
], EnumTypeFileNullableWithAggregatesFilter.prototype, "_max", void 0);
EnumTypeFileNullableWithAggregatesFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], EnumTypeFileNullableWithAggregatesFilter);
exports.EnumTypeFileNullableWithAggregatesFilter = EnumTypeFileNullableWithAggregatesFilter;
