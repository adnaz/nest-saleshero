"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCountAggregate = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let CourseCountAggregate = class CourseCountAggregate {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseCountAggregate.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseCountAggregate.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseCountAggregate.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseCountAggregate.prototype, "audioId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseCountAggregate.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseCountAggregate.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseCountAggregate.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseCountAggregate.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseCountAggregate.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseCountAggregate.prototype, "_all", void 0);
CourseCountAggregate = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], CourseCountAggregate);
exports.CourseCountAggregate = CourseCountAggregate;
