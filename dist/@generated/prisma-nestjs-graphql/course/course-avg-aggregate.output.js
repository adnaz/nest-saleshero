"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseAvgAggregate = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let CourseAvgAggregate = class CourseAvgAggregate {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseAvgAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseAvgAggregate.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseAvgAggregate.prototype, "audioId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseAvgAggregate.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseAvgAggregate.prototype, "authorId", void 0);
CourseAvgAggregate = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], CourseAvgAggregate);
exports.CourseAvgAggregate = CourseAvgAggregate;
