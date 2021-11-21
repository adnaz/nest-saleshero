"use strict";
var ActorWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorWhereInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const file_relation_filter_input_1 = require("../file/file-relation-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const reply_list_relation_filter_input_1 = require("../reply/reply-list-relation-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let ActorWhereInput = ActorWhereInput_1 = class ActorWhereInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ActorWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ActorWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ActorWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ActorWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [ActorWhereInput_1], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ActorWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_filter_input_1.IntFilter)
], ActorWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", string_nullable_filter_input_1.StringNullableFilter)
], ActorWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_relation_filter_input_1.FileRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_relation_filter_input_1.FileRelationFilter)
], ActorWhereInput.prototype, "avatar", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", int_nullable_filter_input_1.IntNullableFilter)
], ActorWhereInput.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_list_relation_filter_input_1.ReplyListRelationFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_list_relation_filter_input_1.ReplyListRelationFilter)
], ActorWhereInput.prototype, "replies", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], ActorWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_filter_input_1.DateTimeFilter)
], ActorWhereInput.prototype, "updatedAt", void 0);
ActorWhereInput = ActorWhereInput_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorWhereInput);
exports.ActorWhereInput = ActorWhereInput;
