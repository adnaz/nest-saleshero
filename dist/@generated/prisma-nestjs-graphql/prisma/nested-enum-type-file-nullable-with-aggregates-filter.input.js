"use strict";
var NestedEnumTypeFileNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTypeFileNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_file_enum_1 = require("./type-file.enum");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_enum_type_file_nullable_filter_input_1 = require("./nested-enum-type-file-nullable-filter.input");
let NestedEnumTypeFileNullableWithAggregatesFilter = NestedEnumTypeFileNullableWithAggregatesFilter_1 = class NestedEnumTypeFileNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedEnumTypeFileNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_file_enum_1.TypeFile], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumTypeFileNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_file_enum_1.TypeFile], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumTypeFileNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedEnumTypeFileNullableWithAggregatesFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedEnumTypeFileNullableWithAggregatesFilter)
], NestedEnumTypeFileNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], NestedEnumTypeFileNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_file_nullable_filter_input_1.NestedEnumTypeFileNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_file_nullable_filter_input_1.NestedEnumTypeFileNullableFilter)
], NestedEnumTypeFileNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_file_nullable_filter_input_1.NestedEnumTypeFileNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_file_nullable_filter_input_1.NestedEnumTypeFileNullableFilter)
], NestedEnumTypeFileNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumTypeFileNullableWithAggregatesFilter = NestedEnumTypeFileNullableWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedEnumTypeFileNullableWithAggregatesFilter);
exports.NestedEnumTypeFileNullableWithAggregatesFilter = NestedEnumTypeFileNullableWithAggregatesFilter;
