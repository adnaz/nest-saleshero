"use strict";
var ReplyScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const float_nullable_with_aggregates_filter_input_1 = require("../prisma/float-nullable-with-aggregates-filter.input");
const int_nullable_with_aggregates_filter_input_1 = require("../prisma/int-nullable-with-aggregates-filter.input");
const string_nullable_with_aggregates_filter_input_1 = require("../prisma/string-nullable-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
let ReplyScalarWhereWithAggregatesInput = ReplyScalarWhereWithAggregatesInput_1 = class ReplyScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ReplyScalarWhereWithAggregatesInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ReplyScalarWhereWithAggregatesInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ReplyScalarWhereWithAggregatesInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], ReplyScalarWhereWithAggregatesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => float_nullable_with_aggregates_filter_input_1.FloatNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", float_nullable_with_aggregates_filter_input_1.FloatNullableWithAggregatesFilter)
], ReplyScalarWhereWithAggregatesInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter)
], ReplyScalarWhereWithAggregatesInput.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], ReplyScalarWhereWithAggregatesInput.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], ReplyScalarWhereWithAggregatesInput.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], ReplyScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], ReplyScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter)
], ReplyScalarWhereWithAggregatesInput.prototype, "sectionId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter)
], ReplyScalarWhereWithAggregatesInput.prototype, "actorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_with_aggregates_filter_input_1.IntNullableWithAggregatesFilter)
], ReplyScalarWhereWithAggregatesInput.prototype, "quickReplyId", void 0);
ReplyScalarWhereWithAggregatesInput = ReplyScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyScalarWhereWithAggregatesInput);
exports.ReplyScalarWhereWithAggregatesInput = ReplyScalarWhereWithAggregatesInput;
