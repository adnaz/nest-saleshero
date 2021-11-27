"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
let PostAvgOrderByAggregateInput = class PostAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostAvgOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostAvgOrderByAggregateInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostAvgOrderByAggregateInput.prototype, "authorId", void 0);
PostAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostAvgOrderByAggregateInput);
exports.PostAvgOrderByAggregateInput = PostAvgOrderByAggregateInput;
