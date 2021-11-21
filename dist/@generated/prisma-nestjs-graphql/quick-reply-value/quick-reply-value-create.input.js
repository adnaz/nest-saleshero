"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueCreateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_create_nested_one_without_values_input_1 = require("../quick-reply/quick-reply-create-nested-one-without-values.input");
let QuickReplyValueCreateInput = class QuickReplyValueCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], QuickReplyValueCreateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], QuickReplyValueCreateInput.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_nested_one_without_values_input_1.QuickReplyCreateNestedOneWithoutValuesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_nested_one_without_values_input_1.QuickReplyCreateNestedOneWithoutValuesInput)
], QuickReplyValueCreateInput.prototype, "quickReply", void 0);
QuickReplyValueCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueCreateInput);
exports.QuickReplyValueCreateInput = QuickReplyValueCreateInput;
