"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneQuickReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_create_input_1 = require("./quick-reply-create.input");
let CreateOneQuickReplyArgs = class CreateOneQuickReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_create_input_1.QuickReplyCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_create_input_1.QuickReplyCreateInput)
], CreateOneQuickReplyArgs.prototype, "data", void 0);
CreateOneQuickReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateOneQuickReplyArgs);
exports.CreateOneQuickReplyArgs = CreateOneQuickReplyArgs;
