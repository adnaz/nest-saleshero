"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const file_order_by_with_relation_input_1 = require("../file/file-order-by-with-relation.input");
const course_order_by_with_relation_input_1 = require("../course/course-order-by-with-relation.input");
const reply_order_by_relation_aggregate_input_1 = require("../reply/reply-order-by-relation-aggregate.input");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
let SectionOrderByWithRelationInput = class SectionOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_order_by_with_relation_input_1.FileOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_order_by_with_relation_input_1.FileOrderByWithRelationInput)
], SectionOrderByWithRelationInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_order_by_with_relation_input_1.CourseOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_order_by_with_relation_input_1.CourseOrderByWithRelationInput)
], SectionOrderByWithRelationInput.prototype, "course", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "courseId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_order_by_relation_aggregate_input_1.ReplyOrderByRelationAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_order_by_relation_aggregate_input_1.ReplyOrderByRelationAggregateInput)
], SectionOrderByWithRelationInput.prototype, "replies", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_order_by_with_relation_input_1.UserOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_order_by_with_relation_input_1.UserOrderByWithRelationInput)
], SectionOrderByWithRelationInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "updatedAt", void 0);
SectionOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionOrderByWithRelationInput);
exports.SectionOrderByWithRelationInput = SectionOrderByWithRelationInput;
