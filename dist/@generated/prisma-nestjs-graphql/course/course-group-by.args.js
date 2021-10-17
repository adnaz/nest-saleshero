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
exports.CourseGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_input_1 = require("./course-where.input");
const course_order_by_with_aggregation_input_1 = require("./course-order-by-with-aggregation.input");
const course_scalar_field_enum_1 = require("./course-scalar-field.enum");
const course_scalar_where_with_aggregates_input_1 = require("./course-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const course_count_aggregate_input_1 = require("./course-count-aggregate.input");
const course_avg_aggregate_input_1 = require("./course-avg-aggregate.input");
const course_sum_aggregate_input_1 = require("./course-sum-aggregate.input");
const course_min_aggregate_input_1 = require("./course-min-aggregate.input");
const course_max_aggregate_input_1 = require("./course-max-aggregate.input");
let CourseGroupByArgs = class CourseGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => course_where_input_1.CourseWhereInput, { nullable: true }),
    __metadata("design:type", course_where_input_1.CourseWhereInput)
], CourseGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_order_by_with_aggregation_input_1.CourseOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], CourseGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_scalar_field_enum_1.CourseScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], CourseGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_scalar_where_with_aggregates_input_1.CourseScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", course_scalar_where_with_aggregates_input_1.CourseScalarWhereWithAggregatesInput)
], CourseGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CourseGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CourseGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_count_aggregate_input_1.CourseCountAggregateInput, { nullable: true }),
    __metadata("design:type", course_count_aggregate_input_1.CourseCountAggregateInput)
], CourseGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_avg_aggregate_input_1.CourseAvgAggregateInput, { nullable: true }),
    __metadata("design:type", course_avg_aggregate_input_1.CourseAvgAggregateInput)
], CourseGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_sum_aggregate_input_1.CourseSumAggregateInput, { nullable: true }),
    __metadata("design:type", course_sum_aggregate_input_1.CourseSumAggregateInput)
], CourseGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_min_aggregate_input_1.CourseMinAggregateInput, { nullable: true }),
    __metadata("design:type", course_min_aggregate_input_1.CourseMinAggregateInput)
], CourseGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_max_aggregate_input_1.CourseMaxAggregateInput, { nullable: true }),
    __metadata("design:type", course_max_aggregate_input_1.CourseMaxAggregateInput)
], CourseGroupByArgs.prototype, "_max", void 0);
CourseGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CourseGroupByArgs);
exports.CourseGroupByArgs = CourseGroupByArgs;
//# sourceMappingURL=course-group-by.args.js.map