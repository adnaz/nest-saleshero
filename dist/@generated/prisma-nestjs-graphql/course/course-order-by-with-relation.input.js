"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const file_order_by_with_relation_input_1 = require("../file/file-order-by-with-relation.input");
const section_order_by_relation_aggregate_input_1 = require("../section/section-order-by-relation-aggregate.input");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
let CourseOrderByWithRelationInput = class CourseOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_order_by_with_relation_input_1.FileOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_order_by_with_relation_input_1.FileOrderByWithRelationInput)
], CourseOrderByWithRelationInput.prototype, "audio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "audioId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_order_by_with_relation_input_1.FileOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_order_by_with_relation_input_1.FileOrderByWithRelationInput)
], CourseOrderByWithRelationInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_order_by_relation_aggregate_input_1.SectionOrderByRelationAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_order_by_relation_aggregate_input_1.SectionOrderByRelationAggregateInput)
], CourseOrderByWithRelationInput.prototype, "sections", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_order_by_with_relation_input_1.UserOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_order_by_with_relation_input_1.UserOrderByWithRelationInput)
], CourseOrderByWithRelationInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "updatedAt", void 0);
CourseOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseOrderByWithRelationInput);
exports.CourseOrderByWithRelationInput = CourseOrderByWithRelationInput;
