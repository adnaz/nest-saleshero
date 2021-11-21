"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyUpsertWithoutValuesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_update_without_values_input_1 = require("./quick-reply-update-without-values.input");
const quick_reply_create_without_values_input_1 = require("./quick-reply-create-without-values.input");
let QuickReplyUpsertWithoutValuesInput = class QuickReplyUpsertWithoutValuesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_update_without_values_input_1.QuickReplyUpdateWithoutValuesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_update_without_values_input_1.QuickReplyUpdateWithoutValuesInput)
], QuickReplyUpsertWithoutValuesInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_without_values_input_1.QuickReplyCreateWithoutValuesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_without_values_input_1.QuickReplyCreateWithoutValuesInput)
], QuickReplyUpsertWithoutValuesInput.prototype, "create", void 0);
QuickReplyUpsertWithoutValuesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyUpsertWithoutValuesInput);
exports.QuickReplyUpsertWithoutValuesInput = QuickReplyUpsertWithoutValuesInput;
