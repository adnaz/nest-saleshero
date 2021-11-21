"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const app_order_by_relation_aggregate_input_1 = require("../app/app-order-by-relation-aggregate.input");
const post_order_by_relation_aggregate_input_1 = require("../post/post-order-by-relation-aggregate.input");
const course_order_by_relation_aggregate_input_1 = require("../course/course-order-by-relation-aggregate.input");
const section_order_by_relation_aggregate_input_1 = require("../section/section-order-by-relation-aggregate.input");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_order_by_relation_aggregate_input_1.AppOrderByRelationAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_order_by_relation_aggregate_input_1.AppOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "apps", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_order_by_relation_aggregate_input_1.PostOrderByRelationAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_order_by_relation_aggregate_input_1.PostOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "posts", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_order_by_relation_aggregate_input_1.CourseOrderByRelationAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_order_by_relation_aggregate_input_1.CourseOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "courses", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_order_by_relation_aggregate_input_1.SectionOrderByRelationAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_order_by_relation_aggregate_input_1.SectionOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "sections", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
UserOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
