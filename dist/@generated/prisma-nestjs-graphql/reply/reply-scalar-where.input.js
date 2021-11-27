"use strict";
var ReplyScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const float_nullable_filter_input_1 = require("../prisma/float-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let ReplyScalarWhereInput = ReplyScalarWhereInput_1 = class ReplyScalarWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ReplyScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ReplyScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ReplyScalarWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], ReplyScalarWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => float_nullable_filter_input_1.FloatNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", float_nullable_filter_input_1.FloatNullableFilter)
], ReplyScalarWhereInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], ReplyScalarWhereInput.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], ReplyScalarWhereInput.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], ReplyScalarWhereInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], ReplyScalarWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], ReplyScalarWhereInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], ReplyScalarWhereInput.prototype, "sectionId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], ReplyScalarWhereInput.prototype, "actorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], ReplyScalarWhereInput.prototype, "quickReplyId", void 0);
ReplyScalarWhereInput = ReplyScalarWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyScalarWhereInput);
exports.ReplyScalarWhereInput = ReplyScalarWhereInput;
