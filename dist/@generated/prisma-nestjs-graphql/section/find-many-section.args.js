"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySectionArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_input_1 = require("./section-where.input");
const section_order_by_with_relation_input_1 = require("./section-order-by-with-relation.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const section_scalar_field_enum_1 = require("./section-scalar-field.enum");
let FindManySectionArgs = class FindManySectionArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_input_1.SectionWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_input_1.SectionWhereInput)
], FindManySectionArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_order_by_with_relation_input_1.SectionOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManySectionArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], FindManySectionArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManySectionArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManySectionArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_scalar_field_enum_1.SectionScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManySectionArgs.prototype, "distinct", void 0);
FindManySectionArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManySectionArgs);
exports.FindManySectionArgs = FindManySectionArgs;
