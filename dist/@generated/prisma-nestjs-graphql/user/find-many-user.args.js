"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyUserArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_input_1 = require("./user-where.input");
const user_order_by_with_relation_input_1 = require("./user-order-by-with-relation.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const user_scalar_field_enum_1 = require("./user-scalar-field.enum");
let FindManyUserArgs = class FindManyUserArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_input_1.UserWhereInput)
], FindManyUserArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [user_order_by_with_relation_input_1.UserOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyUserArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], FindManyUserArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyUserArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyUserArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [user_scalar_field_enum_1.UserScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyUserArgs.prototype, "distinct", void 0);
FindManyUserArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManyUserArgs);
exports.FindManyUserArgs = FindManyUserArgs;
