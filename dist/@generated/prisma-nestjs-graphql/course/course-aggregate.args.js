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
exports.CourseAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_input_1 = require("./course-where.input");
const course_order_by_with_relation_input_1 = require("./course-order-by-with-relation.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const course_count_aggregate_input_1 = require("./course-count-aggregate.input");
const course_avg_aggregate_input_1 = require("./course-avg-aggregate.input");
const course_sum_aggregate_input_1 = require("./course-sum-aggregate.input");
const course_min_aggregate_input_1 = require("./course-min-aggregate.input");
const course_max_aggregate_input_1 = require("./course-max-aggregate.input");
let CourseAggregateArgs = class CourseAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => course_where_input_1.CourseWhereInput, { nullable: true }),
    __metadata("design:type", course_where_input_1.CourseWhereInput)
], CourseAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_order_by_with_relation_input_1.CourseOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], CourseAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: true }),
    __metadata("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CourseAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CourseAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_count_aggregate_input_1.CourseCountAggregateInput, { nullable: true }),
    __metadata("design:type", course_count_aggregate_input_1.CourseCountAggregateInput)
], CourseAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_avg_aggregate_input_1.CourseAvgAggregateInput, { nullable: true }),
    __metadata("design:type", course_avg_aggregate_input_1.CourseAvgAggregateInput)
], CourseAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_sum_aggregate_input_1.CourseSumAggregateInput, { nullable: true }),
    __metadata("design:type", course_sum_aggregate_input_1.CourseSumAggregateInput)
], CourseAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_min_aggregate_input_1.CourseMinAggregateInput, { nullable: true }),
    __metadata("design:type", course_min_aggregate_input_1.CourseMinAggregateInput)
], CourseAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_max_aggregate_input_1.CourseMaxAggregateInput, { nullable: true }),
    __metadata("design:type", course_max_aggregate_input_1.CourseMaxAggregateInput)
], CourseAggregateArgs.prototype, "_max", void 0);
CourseAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CourseAggregateArgs);
exports.CourseAggregateArgs = CourseAggregateArgs;
//# sourceMappingURL=course-aggregate.args.js.map