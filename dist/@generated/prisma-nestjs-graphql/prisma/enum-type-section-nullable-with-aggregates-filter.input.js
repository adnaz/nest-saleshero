"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTypeSectionNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_section_enum_1 = require("./type-section.enum");
const nested_enum_type_section_nullable_with_aggregates_filter_input_1 = require("./nested-enum-type-section-nullable-with-aggregates-filter.input");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_enum_type_section_nullable_filter_input_1 = require("./nested-enum-type-section-nullable-filter.input");
let EnumTypeSectionNullableWithAggregatesFilter = class EnumTypeSectionNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_section_nullable_with_aggregates_filter_input_1.NestedEnumTypeSectionNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_section_nullable_with_aggregates_filter_input_1.NestedEnumTypeSectionNullableWithAggregatesFilter)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter)
], EnumTypeSectionNullableWithAggregatesFilter.prototype, "_max", void 0);
EnumTypeSectionNullableWithAggregatesFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], EnumTypeSectionNullableWithAggregatesFilter);
exports.EnumTypeSectionNullableWithAggregatesFilter = EnumTypeSectionNullableWithAggregatesFilter;
