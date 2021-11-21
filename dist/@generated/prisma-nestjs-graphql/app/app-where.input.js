"use strict";
var AppWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let AppWhereInput = AppWhereInput_1 = class AppWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [AppWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [AppWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [AppWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], AppWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], AppWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_relation_filter_input_1.UserRelationFilter)
], AppWhereInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], AppWhereInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], AppWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], AppWhereInput.prototype, "updatedAt", void 0);
AppWhereInput = AppWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppWhereInput);
exports.AppWhereInput = AppWhereInput;
