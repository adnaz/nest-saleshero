"use strict";
var QuickReplyScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const bool_nullable_with_aggregates_filter_input_1 = require("../prisma/bool-nullable-with-aggregates-filter.input");
const enum_type_reply_nullable_with_aggregates_filter_input_1 = require("../prisma/enum-type-reply-nullable-with-aggregates-filter.input");
let QuickReplyScalarWhereWithAggregatesInput = QuickReplyScalarWhereWithAggregatesInput_1 = class QuickReplyScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [QuickReplyScalarWhereWithAggregatesInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [QuickReplyScalarWhereWithAggregatesInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [QuickReplyScalarWhereWithAggregatesInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], QuickReplyScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], QuickReplyScalarWhereWithAggregatesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => bool_nullable_with_aggregates_filter_input_1.BoolNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", bool_nullable_with_aggregates_filter_input_1.BoolNullableWithAggregatesFilter)
], QuickReplyScalarWhereWithAggregatesInput.prototype, "keepIt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => enum_type_reply_nullable_with_aggregates_filter_input_1.EnumTypeReplyNullableWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", enum_type_reply_nullable_with_aggregates_filter_input_1.EnumTypeReplyNullableWithAggregatesFilter)
], QuickReplyScalarWhereWithAggregatesInput.prototype, "type", void 0);
QuickReplyScalarWhereWithAggregatesInput = QuickReplyScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyScalarWhereWithAggregatesInput);
exports.QuickReplyScalarWhereWithAggregatesInput = QuickReplyScalarWhereWithAggregatesInput;
