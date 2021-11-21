"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAppArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_where_input_1 = require("./app-where.input");
const app_order_by_with_relation_input_1 = require("./app-order-by-with-relation.input");
const app_where_unique_input_1 = require("./app-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const app_scalar_field_enum_1 = require("./app-scalar-field.enum");
let FindManyAppArgs = class FindManyAppArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_input_1.AppWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_where_input_1.AppWhereInput)
], FindManyAppArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_order_by_with_relation_input_1.AppOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyAppArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_unique_input_1.AppWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_where_unique_input_1.AppWhereUniqueInput)
], FindManyAppArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyAppArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyAppArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_scalar_field_enum_1.AppScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyAppArgs.prototype, "distinct", void 0);
FindManyAppArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManyAppArgs);
exports.FindManyAppArgs = FindManyAppArgs;
