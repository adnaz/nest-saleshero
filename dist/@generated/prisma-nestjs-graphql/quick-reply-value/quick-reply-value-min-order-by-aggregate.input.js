"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
let QuickReplyValueMinOrderByAggregateInput = class QuickReplyValueMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyValueMinOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyValueMinOrderByAggregateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyValueMinOrderByAggregateInput.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], QuickReplyValueMinOrderByAggregateInput.prototype, "quickReplyId", void 0);
QuickReplyValueMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueMinOrderByAggregateInput);
exports.QuickReplyValueMinOrderByAggregateInput = QuickReplyValueMinOrderByAggregateInput;
