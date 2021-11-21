"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_string_filter_input_1 = require("./nested-string-filter.input");
let StringFilter = class StringFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], StringFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], StringFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringFilter.prototype, "contains", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringFilter.prototype, "startsWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringFilter.prototype, "endsWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_string_filter_input_1.NestedStringFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_string_filter_input_1.NestedStringFilter)
], StringFilter.prototype, "not", void 0);
StringFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], StringFilter);
exports.StringFilter = StringFilter;
