"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_input_1 = require("./reply-where.input");
const reply_order_by_with_relation_input_1 = require("./reply-order-by-with-relation.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const reply_scalar_field_enum_1 = require("./reply-scalar-field.enum");
let FindManyReplyArgs = class FindManyReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_input_1.ReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_input_1.ReplyWhereInput)
], FindManyReplyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_order_by_with_relation_input_1.ReplyOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyReplyArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], FindManyReplyArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyReplyArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyReplyArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_scalar_field_enum_1.ReplyScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyReplyArgs.prototype, "distinct", void 0);
FindManyReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManyReplyArgs);
exports.FindManyReplyArgs = FindManyReplyArgs;
