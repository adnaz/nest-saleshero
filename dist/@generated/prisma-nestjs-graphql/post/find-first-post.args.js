"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPostArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_input_1 = require("./post-where.input");
const post_order_by_with_relation_input_1 = require("./post-order-by-with-relation.input");
const post_where_unique_input_1 = require("./post-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const post_scalar_field_enum_1 = require("./post-scalar-field.enum");
let FindFirstPostArgs = class FindFirstPostArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_where_input_1.PostWhereInput)
], FindFirstPostArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_order_by_with_relation_input_1.PostOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstPostArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_where_unique_input_1.PostWhereUniqueInput)
], FindFirstPostArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstPostArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstPostArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_scalar_field_enum_1.PostScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstPostArgs.prototype, "distinct", void 0);
FindFirstPostArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindFirstPostArgs);
exports.FindFirstPostArgs = FindFirstPostArgs;
