"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplySumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
let ReplySumOrderByAggregateInput = class ReplySumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplySumOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplySumOrderByAggregateInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplySumOrderByAggregateInput.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplySumOrderByAggregateInput.prototype, "sectionId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplySumOrderByAggregateInput.prototype, "actorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplySumOrderByAggregateInput.prototype, "quickReplyId", void 0);
ReplySumOrderByAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplySumOrderByAggregateInput);
exports.ReplySumOrderByAggregateInput = ReplySumOrderByAggregateInput;
