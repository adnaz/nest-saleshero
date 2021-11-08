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
var NestedEnumTypeSectionNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTypeSectionNullableFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_section_enum_1 = require("./type-section.enum");
let NestedEnumTypeSectionNullableFilter = NestedEnumTypeSectionNullableFilter_1 = class NestedEnumTypeSectionNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumTypeSectionNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumTypeSectionNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [type_section_enum_1.TypeSection], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumTypeSectionNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumTypeSectionNullableFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumTypeSectionNullableFilter)
], NestedEnumTypeSectionNullableFilter.prototype, "not", void 0);
NestedEnumTypeSectionNullableFilter = NestedEnumTypeSectionNullableFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumTypeSectionNullableFilter);
exports.NestedEnumTypeSectionNullableFilter = NestedEnumTypeSectionNullableFilter;
//# sourceMappingURL=nested-enum-type-section-nullable-filter.input.js.map