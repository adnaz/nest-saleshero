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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSectionArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_input_1 = require("./section-where.input");
const section_order_by_with_relation_input_1 = require("./section-order-by-with-relation.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const section_scalar_field_enum_1 = require("./section-scalar-field.enum");
let FindFirstSectionArgs = class FindFirstSectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => section_where_input_1.SectionWhereInput, { nullable: true }),
    __metadata("design:type", section_where_input_1.SectionWhereInput)
], FindFirstSectionArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_order_by_with_relation_input_1.SectionOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstSectionArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: true }),
    __metadata("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], FindFirstSectionArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstSectionArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstSectionArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_scalar_field_enum_1.SectionScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstSectionArgs.prototype, "distinct", void 0);
FindFirstSectionArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstSectionArgs);
exports.FindFirstSectionArgs = FindFirstSectionArgs;
//# sourceMappingURL=find-first-section.args.js.map