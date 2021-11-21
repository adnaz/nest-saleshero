"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstQuickReplyValueArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_where_input_1 = require("./quick-reply-value-where.input");
const quick_reply_value_order_by_with_relation_input_1 = require("./quick-reply-value-order-by-with-relation.input");
const quick_reply_value_where_unique_input_1 = require("./quick-reply-value-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const quick_reply_value_scalar_field_enum_1 = require("./quick-reply-value-scalar-field.enum");
let FindFirstQuickReplyValueArgs = class FindFirstQuickReplyValueArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_where_input_1.QuickReplyValueWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_where_input_1.QuickReplyValueWhereInput)
], FindFirstQuickReplyValueArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_order_by_with_relation_input_1.QuickReplyValueOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstQuickReplyValueArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput)
], FindFirstQuickReplyValueArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstQuickReplyValueArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstQuickReplyValueArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_scalar_field_enum_1.QuickReplyValueScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstQuickReplyValueArgs.prototype, "distinct", void 0);
FindFirstQuickReplyValueArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindFirstQuickReplyValueArgs);
exports.FindFirstQuickReplyValueArgs = FindFirstQuickReplyValueArgs;
