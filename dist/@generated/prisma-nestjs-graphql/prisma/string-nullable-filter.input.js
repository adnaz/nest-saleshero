"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringNullableFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_string_nullable_filter_input_1 = require("./nested-string-nullable-filter.input");
let StringNullableFilter = class StringNullableFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], StringNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], StringNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableFilter.prototype, "contains", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableFilter.prototype, "startsWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableFilter.prototype, "endsWith", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_string_nullable_filter_input_1.NestedStringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_string_nullable_filter_input_1.NestedStringNullableFilter)
], StringNullableFilter.prototype, "not", void 0);
StringNullableFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], StringNullableFilter);
exports.StringNullableFilter = StringNullableFilter;
