"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const post_order_by_relation_aggregate_input_1 = require("../post/post-order-by-relation-aggregate.input");
const course_order_by_relation_aggregate_input_1 = require("../course/course-order-by-relation-aggregate.input");
const section_order_by_relation_aggregate_input_1 = require("../section/section-order-by-relation-aggregate.input");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_order_by_relation_aggregate_input_1.PostOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", post_order_by_relation_aggregate_input_1.PostOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "posts", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_order_by_relation_aggregate_input_1.CourseOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", course_order_by_relation_aggregate_input_1.CourseOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "courses", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_order_by_relation_aggregate_input_1.SectionOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", section_order_by_relation_aggregate_input_1.SectionOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "sections", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
UserOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
//# sourceMappingURL=user-order-by-with-relation.input.js.map