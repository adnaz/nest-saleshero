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
exports.AggregateCourse = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_count_aggregate_output_1 = require("./course-count-aggregate.output");
const course_avg_aggregate_output_1 = require("./course-avg-aggregate.output");
const course_sum_aggregate_output_1 = require("./course-sum-aggregate.output");
const course_min_aggregate_output_1 = require("./course-min-aggregate.output");
const course_max_aggregate_output_1 = require("./course-max-aggregate.output");
let AggregateCourse = class AggregateCourse {
};
__decorate([
    (0, graphql_1.Field)(() => course_count_aggregate_output_1.CourseCountAggregate, { nullable: true }),
    __metadata("design:type", course_count_aggregate_output_1.CourseCountAggregate)
], AggregateCourse.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_avg_aggregate_output_1.CourseAvgAggregate, { nullable: true }),
    __metadata("design:type", course_avg_aggregate_output_1.CourseAvgAggregate)
], AggregateCourse.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_sum_aggregate_output_1.CourseSumAggregate, { nullable: true }),
    __metadata("design:type", course_sum_aggregate_output_1.CourseSumAggregate)
], AggregateCourse.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_min_aggregate_output_1.CourseMinAggregate, { nullable: true }),
    __metadata("design:type", course_min_aggregate_output_1.CourseMinAggregate)
], AggregateCourse.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_max_aggregate_output_1.CourseMaxAggregate, { nullable: true }),
    __metadata("design:type", course_max_aggregate_output_1.CourseMaxAggregate)
], AggregateCourse.prototype, "_max", void 0);
AggregateCourse = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateCourse);
exports.AggregateCourse = AggregateCourse;
//# sourceMappingURL=aggregate-course.output.js.map