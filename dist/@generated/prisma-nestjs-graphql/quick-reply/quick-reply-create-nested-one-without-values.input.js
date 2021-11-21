"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyCreateNestedOneWithoutValuesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_create_without_values_input_1 = require("./quick-reply-create-without-values.input");
const quick_reply_create_or_connect_without_values_input_1 = require("./quick-reply-create-or-connect-without-values.input");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
let QuickReplyCreateNestedOneWithoutValuesInput = class QuickReplyCreateNestedOneWithoutValuesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_without_values_input_1.QuickReplyCreateWithoutValuesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_without_values_input_1.QuickReplyCreateWithoutValuesInput)
], QuickReplyCreateNestedOneWithoutValuesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_or_connect_without_values_input_1.QuickReplyCreateOrConnectWithoutValuesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_or_connect_without_values_input_1.QuickReplyCreateOrConnectWithoutValuesInput)
], QuickReplyCreateNestedOneWithoutValuesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], QuickReplyCreateNestedOneWithoutValuesInput.prototype, "connect", void 0);
QuickReplyCreateNestedOneWithoutValuesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyCreateNestedOneWithoutValuesInput);
exports.QuickReplyCreateNestedOneWithoutValuesInput = QuickReplyCreateNestedOneWithoutValuesInput;
