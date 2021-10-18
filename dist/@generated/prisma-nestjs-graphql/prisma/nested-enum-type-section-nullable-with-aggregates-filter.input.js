"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NestedEnumTypeSectionNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTypeSectionNullableWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_section_enum_1 = require("./type-section.enum");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_enum_type_section_nullable_filter_input_1 = require("./nested-enum-type-section-nullable-filter.input");
let NestedEnumTypeSectionNullableWithAggregatesFilter = NestedEnumTypeSectionNullableWithAggregatesFilter_1 = class NestedEnumTypeSectionNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumTypeSectionNullableWithAggregatesFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumTypeSectionNullableWithAggregatesFilter)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    __metadata("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter, { nullable: true }),
    __metadata("design:type", nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter, { nullable: true }),
    __metadata("design:type", nested_enum_type_section_nullable_filter_input_1.NestedEnumTypeSectionNullableFilter)
], NestedEnumTypeSectionNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumTypeSectionNullableWithAggregatesFilter = NestedEnumTypeSectionNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumTypeSectionNullableWithAggregatesFilter);
exports.NestedEnumTypeSectionNullableWithAggregatesFilter = NestedEnumTypeSectionNullableWithAggregatesFilter;
//# sourceMappingURL=nested-enum-type-section-nullable-with-aggregates-filter.input.js.map