"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyFileArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_where_input_1 = require("./file-where.input");
const file_order_by_with_relation_input_1 = require("./file-order-by-with-relation.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const file_scalar_field_enum_1 = require("./file-scalar-field.enum");
let FindManyFileArgs = class FindManyFileArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_input_1.FileWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_input_1.FileWhereInput)
], FindManyFileArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [file_order_by_with_relation_input_1.FileOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyFileArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FindManyFileArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyFileArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyFileArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [file_scalar_field_enum_1.FileScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyFileArgs.prototype, "distinct", void 0);
FindManyFileArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManyFileArgs);
exports.FindManyFileArgs = FindManyFileArgs;
