"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSectionArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_input_1 = require("./section-where.input");
const section_order_by_with_relation_input_1 = require("./section-order-by-with-relation.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const section_scalar_field_enum_1 = require("./section-scalar-field.enum");
let FindFirstSectionArgs = class FindFirstSectionArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_input_1.SectionWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_input_1.SectionWhereInput)
], FindFirstSectionArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_order_by_with_relation_input_1.SectionOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstSectionArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], FindFirstSectionArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstSectionArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstSectionArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_scalar_field_enum_1.SectionScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstSectionArgs.prototype, "distinct", void 0);
FindFirstSectionArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindFirstSectionArgs);
exports.FindFirstSectionArgs = FindFirstSectionArgs;
