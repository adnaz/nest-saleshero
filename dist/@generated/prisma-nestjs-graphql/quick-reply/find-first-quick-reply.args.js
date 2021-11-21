"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstQuickReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_where_input_1 = require("./quick-reply-where.input");
const quick_reply_order_by_with_relation_input_1 = require("./quick-reply-order-by-with-relation.input");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_scalar_field_enum_1 = require("./quick-reply-scalar-field.enum");
let FindFirstQuickReplyArgs = class FindFirstQuickReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_input_1.QuickReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_input_1.QuickReplyWhereInput)
], FindFirstQuickReplyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_order_by_with_relation_input_1.QuickReplyOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstQuickReplyArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], FindFirstQuickReplyArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstQuickReplyArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstQuickReplyArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_scalar_field_enum_1.QuickReplyScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstQuickReplyArgs.prototype, "distinct", void 0);
FindFirstQuickReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindFirstQuickReplyArgs);
exports.FindFirstQuickReplyArgs = FindFirstQuickReplyArgs;
