"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneQuickReplyValueArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_create_input_1 = require("./quick-reply-value-create.input");
let CreateOneQuickReplyValueArgs = class CreateOneQuickReplyValueArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_create_input_1.QuickReplyValueCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_create_input_1.QuickReplyValueCreateInput)
], CreateOneQuickReplyValueArgs.prototype, "data", void 0);
CreateOneQuickReplyValueArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateOneQuickReplyValueArgs);
exports.CreateOneQuickReplyValueArgs = CreateOneQuickReplyValueArgs;
