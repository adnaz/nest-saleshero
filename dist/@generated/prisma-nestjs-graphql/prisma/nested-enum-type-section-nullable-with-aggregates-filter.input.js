"use strict";
var NestedEnumTypeSectionNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTypeSectionNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_section_enum_1 = require("./type-section.enum");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_enum_type_section_nullable_filter_input_1 = require("./nested-enum-type-section-nullable-filter.input");
let NestedEnumTypeSectionNullableWithAggregatesFilter = NestedEnumTypeSectionNullableWithAggregatesFilter_1 = class NestedEnumTypeSectionNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedEnumTypeSectionNullableWithAggregatesFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedEnumTypeSectionNullableWithAggregatesFilter)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumTypeSectionNullableWithAggregatesFilter = NestedEnumTypeSectionNullableWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedEnumTypeSectionNullableWithAggregatesFilter);
exports.NestedEnumTypeSectionNullableWithAggregatesFilter = NestedEnumTypeSectionNullableWithAggregatesFilter;
