"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const quick_reply_order_by_with_relation_input_1 = require("../quick-reply/quick-reply-order-by-with-relation.input");
let QuickReplyValueOrderByWithRelationInput = class QuickReplyValueOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyValueOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyValueOrderByWithRelationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyValueOrderByWithRelationInput.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_order_by_with_relation_input_1.QuickReplyOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_order_by_with_relation_input_1.QuickReplyOrderByWithRelationInput)
], QuickReplyValueOrderByWithRelationInput.prototype, "quickReply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyValueOrderByWithRelationInput.prototype, "quickReplyId", void 0);
QuickReplyValueOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueOrderByWithRelationInput);
exports.QuickReplyValueOrderByWithRelationInput = QuickReplyValueOrderByWithRelationInput;
