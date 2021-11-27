"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
let PostSumOrderByAggregateInput = class PostSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostSumOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostSumOrderByAggregateInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostSumOrderByAggregateInput.prototype, "authorId", void 0);
PostSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostSumOrderByAggregateInput);
exports.PostSumOrderByAggregateInput = PostSumOrderByAggregateInput;
