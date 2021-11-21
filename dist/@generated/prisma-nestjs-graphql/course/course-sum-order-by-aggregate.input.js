"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
let CourseSumOrderByAggregateInput = class CourseSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseSumOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseSumOrderByAggregateInput.prototype, "audioId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseSumOrderByAggregateInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseSumOrderByAggregateInput.prototype, "authorId", void 0);
CourseSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseSumOrderByAggregateInput);
exports.CourseSumOrderByAggregateInput = CourseSumOrderByAggregateInput;
