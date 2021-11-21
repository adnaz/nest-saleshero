"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const reply_order_by_with_relation_input_1 = require("../reply/reply-order-by-with-relation.input");
const quick_reply_value_order_by_relation_aggregate_input_1 = require("../quick-reply-value/quick-reply-value-order-by-relation-aggregate.input");
let QuickReplyOrderByWithRelationInput = class QuickReplyOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_order_by_with_relation_input_1.ReplyOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_order_by_with_relation_input_1.ReplyOrderByWithRelationInput)
], QuickReplyOrderByWithRelationInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyOrderByWithRelationInput.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyOrderByWithRelationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_order_by_relation_aggregate_input_1.QuickReplyValueOrderByRelationAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_order_by_relation_aggregate_input_1.QuickReplyValueOrderByRelationAggregateInput)
], QuickReplyOrderByWithRelationInput.prototype, "values", void 0);
QuickReplyOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyOrderByWithRelationInput);
exports.QuickReplyOrderByWithRelationInput = QuickReplyOrderByWithRelationInput;
