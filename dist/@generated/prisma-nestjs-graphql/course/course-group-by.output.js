"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseGroupBy = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const course_count_aggregate_output_1 = require("./course-count-aggregate.output");
const course_avg_aggregate_output_1 = require("./course-avg-aggregate.output");
const course_sum_aggregate_output_1 = require("./course-sum-aggregate.output");
const course_min_aggregate_output_1 = require("./course-min-aggregate.output");
const course_max_aggregate_output_1 = require("./course-max-aggregate.output");
let CourseGroupBy = class CourseGroupBy {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], CourseGroupBy.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], CourseGroupBy.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseGroupBy.prototype, "audioId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseGroupBy.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseGroupBy.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseGroupBy.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_count_aggregate_output_1.CourseCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_count_aggregate_output_1.CourseCountAggregate)
], CourseGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_avg_aggregate_output_1.CourseAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_avg_aggregate_output_1.CourseAvgAggregate)
], CourseGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_sum_aggregate_output_1.CourseSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_sum_aggregate_output_1.CourseSumAggregate)
], CourseGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_min_aggregate_output_1.CourseMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_min_aggregate_output_1.CourseMinAggregate)
], CourseGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_max_aggregate_output_1.CourseMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_max_aggregate_output_1.CourseMaxAggregate)
], CourseGroupBy.prototype, "_max", void 0);
CourseGroupBy = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], CourseGroupBy);
exports.CourseGroupBy = CourseGroupBy;
