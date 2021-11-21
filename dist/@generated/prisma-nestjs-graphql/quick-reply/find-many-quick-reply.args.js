"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyQuickReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_where_input_1 = require("./quick-reply-where.input");
const quick_reply_order_by_with_relation_input_1 = require("./quick-reply-order-by-with-relation.input");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_scalar_field_enum_1 = require("./quick-reply-scalar-field.enum");
let FindManyQuickReplyArgs = class FindManyQuickReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_input_1.QuickReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_input_1.QuickReplyWhereInput)
], FindManyQuickReplyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_order_by_with_relation_input_1.QuickReplyOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyQuickReplyArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], FindManyQuickReplyArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyQuickReplyArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyQuickReplyArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_scalar_field_enum_1.QuickReplyScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyQuickReplyArgs.prototype, "distinct", void 0);
FindManyQuickReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindManyQuickReplyArgs);
exports.FindManyQuickReplyArgs = FindManyQuickReplyArgs;
