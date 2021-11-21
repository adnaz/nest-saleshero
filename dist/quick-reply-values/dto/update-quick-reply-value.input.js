"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuickReplyValueInput = void 0;
const tslib_1 = require("tslib");
const create_quick_reply_value_input_1 = require("./create-quick-reply-value.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateQuickReplyValueInput = class UpdateQuickReplyValueInput extends (0, graphql_1.PartialType)(create_quick_reply_value_input_1.CreateQuickReplyValueInput) {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, tslib_1.__metadata)("design:type", Number)
], UpdateQuickReplyValueInput.prototype, "id", void 0);
UpdateQuickReplyValueInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], UpdateQuickReplyValueInput);
exports.UpdateQuickReplyValueInput = UpdateQuickReplyValueInput;
