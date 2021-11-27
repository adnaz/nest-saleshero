"use strict";
var FileScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const string_nullable_with_aggregates_filter_input_1 = require("../prisma/string-nullable-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
const enum_type_file_nullable_with_aggregates_filter_input_1 = require("../prisma/enum-type-file-nullable-with-aggregates-filter.input");
let FileScalarWhereWithAggregatesInput = FileScalarWhereWithAggregatesInput_1 = class FileScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [FileScalarWhereWithAggregatesInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FileScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [FileScalarWhereWithAggregatesInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FileScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [FileScalarWhereWithAggregatesInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FileScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => enum_type_file_nullable_with_aggregates_filter_input_1.EnumTypeFileNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", enum_type_file_nullable_with_aggregates_filter_input_1.EnumTypeFileNullableWithAggregatesFilter)
], FileScalarWhereWithAggregatesInput.prototype, "type", void 0);
FileScalarWhereWithAggregatesInput = FileScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileScalarWhereWithAggregatesInput);
exports.FileScalarWhereWithAggregatesInput = FileScalarWhereWithAggregatesInput;
