"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyCreateOrConnectWithoutValuesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
const quick_reply_create_without_values_input_1 = require("./quick-reply-create-without-values.input");
let QuickReplyCreateOrConnectWithoutValuesInput = class QuickReplyCreateOrConnectWithoutValuesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], QuickReplyCreateOrConnectWithoutValuesInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_without_values_input_1.QuickReplyCreateWithoutValuesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_without_values_input_1.QuickReplyCreateWithoutValuesInput)
], QuickReplyCreateOrConnectWithoutValuesInput.prototype, "create", void 0);
QuickReplyCreateOrConnectWithoutValuesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyCreateOrConnectWithoutValuesInput);
exports.QuickReplyCreateOrConnectWithoutValuesInput = QuickReplyCreateOrConnectWithoutValuesInput;
