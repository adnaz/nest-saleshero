"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCourse = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_count_aggregate_output_1 = require("./course-count-aggregate.output");
const course_avg_aggregate_output_1 = require("./course-avg-aggregate.output");
const course_sum_aggregate_output_1 = require("./course-sum-aggregate.output");
const course_min_aggregate_output_1 = require("./course-min-aggregate.output");
const course_max_aggregate_output_1 = require("./course-max-aggregate.output");
let AggregateCourse = class AggregateCourse {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_count_aggregate_output_1.CourseCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_count_aggregate_output_1.CourseCountAggregate)
], AggregateCourse.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_avg_aggregate_output_1.CourseAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_avg_aggregate_output_1.CourseAvgAggregate)
], AggregateCourse.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_sum_aggregate_output_1.CourseSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_sum_aggregate_output_1.CourseSumAggregate)
], AggregateCourse.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_min_aggregate_output_1.CourseMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_min_aggregate_output_1.CourseMinAggregate)
], AggregateCourse.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_max_aggregate_output_1.CourseMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_max_aggregate_output_1.CourseMaxAggregate)
], AggregateCourse.prototype, "_max", void 0);
AggregateCourse = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AggregateCourse);
exports.AggregateCourse = AggregateCourse;
