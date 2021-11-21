"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyRelationFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_input_1 = require("./reply-where.input");
let ReplyRelationFilter = class ReplyRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_input_1.ReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_input_1.ReplyWhereInput)
], ReplyRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_input_1.ReplyWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_input_1.ReplyWhereInput)
], ReplyRelationFilter.prototype, "isNot", void 0);
ReplyRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyRelationFilter);
exports.ReplyRelationFilter = ReplyRelationFilter;
