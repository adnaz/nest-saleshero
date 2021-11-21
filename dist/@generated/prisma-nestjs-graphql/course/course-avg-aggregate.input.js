"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseAvgAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let CourseAvgAggregateInput = class CourseAvgAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseAvgAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseAvgAggregateInput.prototype, "audioId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseAvgAggregateInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseAvgAggregateInput.prototype, "authorId", void 0);
CourseAvgAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseAvgAggregateInput);
exports.CourseAvgAggregateInput = CourseAvgAggregateInput;
