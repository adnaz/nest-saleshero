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
exports.CourseOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const course_count_order_by_aggregate_input_1 = require("./course-count-order-by-aggregate.input");
const course_avg_order_by_aggregate_input_1 = require("./course-avg-order-by-aggregate.input");
const course_max_order_by_aggregate_input_1 = require("./course-max-order-by-aggregate.input");
const course_min_order_by_aggregate_input_1 = require("./course-min-order-by-aggregate.input");
const course_sum_order_by_aggregate_input_1 = require("./course-sum-order-by-aggregate.input");
let CourseOrderByWithAggregationInput = class CourseOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "audio", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "published", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], CourseOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_count_order_by_aggregate_input_1.CourseCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", course_count_order_by_aggregate_input_1.CourseCountOrderByAggregateInput)
], CourseOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_avg_order_by_aggregate_input_1.CourseAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", course_avg_order_by_aggregate_input_1.CourseAvgOrderByAggregateInput)
], CourseOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_max_order_by_aggregate_input_1.CourseMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", course_max_order_by_aggregate_input_1.CourseMaxOrderByAggregateInput)
], CourseOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_min_order_by_aggregate_input_1.CourseMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", course_min_order_by_aggregate_input_1.CourseMinOrderByAggregateInput)
], CourseOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_sum_order_by_aggregate_input_1.CourseSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", course_sum_order_by_aggregate_input_1.CourseSumOrderByAggregateInput)
], CourseOrderByWithAggregationInput.prototype, "_sum", void 0);
CourseOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], CourseOrderByWithAggregationInput);
exports.CourseOrderByWithAggregationInput = CourseOrderByWithAggregationInput;
//# sourceMappingURL=course-order-by-with-aggregation.input.js.map