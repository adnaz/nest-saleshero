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
exports.FindFirstCourseArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_input_1 = require("./course-where.input");
const course_order_by_with_relation_input_1 = require("./course-order-by-with-relation.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const course_scalar_field_enum_1 = require("./course-scalar-field.enum");
let FindFirstCourseArgs = class FindFirstCourseArgs {
};
__decorate([
    (0, graphql_1.Field)(() => course_where_input_1.CourseWhereInput, { nullable: true }),
    __metadata("design:type", course_where_input_1.CourseWhereInput)
], FindFirstCourseArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_order_by_with_relation_input_1.CourseOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstCourseArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: true }),
    __metadata("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], FindFirstCourseArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstCourseArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstCourseArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_scalar_field_enum_1.CourseScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstCourseArgs.prototype, "distinct", void 0);
FindFirstCourseArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstCourseArgs);
exports.FindFirstCourseArgs = FindFirstCourseArgs;
//# sourceMappingURL=find-first-course.args.js.map