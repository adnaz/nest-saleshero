"use strict";
var AppScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let AppScalarWhereInput = AppScalarWhereInput_1 = class AppScalarWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [AppScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [AppScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [AppScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], AppScalarWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], AppScalarWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], AppScalarWhereInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], AppScalarWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], AppScalarWhereInput.prototype, "updatedAt", void 0);
AppScalarWhereInput = AppScalarWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppScalarWhereInput);
exports.AppScalarWhereInput = AppScalarWhereInput;
