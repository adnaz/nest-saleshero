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
exports.CourseGroupBy = void 0;
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
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], CourseGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CourseGroupBy.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CourseGroupBy.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CourseGroupBy.prototype, "audio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CourseGroupBy.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CourseGroupBy.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CourseGroupBy.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], CourseGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], CourseGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_count_aggregate_output_1.CourseCountAggregate, { nullable: true }),
    __metadata("design:type", course_count_aggregate_output_1.CourseCountAggregate)
], CourseGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_avg_aggregate_output_1.CourseAvgAggregate, { nullable: true }),
    __metadata("design:type", course_avg_aggregate_output_1.CourseAvgAggregate)
], CourseGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_sum_aggregate_output_1.CourseSumAggregate, { nullable: true }),
    __metadata("design:type", course_sum_aggregate_output_1.CourseSumAggregate)
], CourseGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_min_aggregate_output_1.CourseMinAggregate, { nullable: true }),
    __metadata("design:type", course_min_aggregate_output_1.CourseMinAggregate)
], CourseGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_max_aggregate_output_1.CourseMaxAggregate, { nullable: true }),
    __metadata("design:type", course_max_aggregate_output_1.CourseMaxAggregate)
], CourseGroupBy.prototype, "_max", void 0);
CourseGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], CourseGroupBy);
exports.CourseGroupBy = CourseGroupBy;
//# sourceMappingURL=course-group-by.output.js.map