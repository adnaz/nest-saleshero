"use strict";
var NestedEnumTypeReplyNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTypeReplyNullableFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_reply_enum_1 = require("./type-reply.enum");
let NestedEnumTypeReplyNullableFilter = NestedEnumTypeReplyNullableFilter_1 = class NestedEnumTypeReplyNullableFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedEnumTypeReplyNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_reply_enum_1.TypeReply], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumTypeReplyNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [type_reply_enum_1.TypeReply], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumTypeReplyNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedEnumTypeReplyNullableFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedEnumTypeReplyNullableFilter)
], NestedEnumTypeReplyNullableFilter.prototype, "not", void 0);
NestedEnumTypeReplyNullableFilter = NestedEnumTypeReplyNullableFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedEnumTypeReplyNullableFilter);
exports.NestedEnumTypeReplyNullableFilter = NestedEnumTypeReplyNullableFilter;
