"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyQuickReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_create_many_input_1 = require("./quick-reply-create-many.input");
let CreateManyQuickReplyArgs = class CreateManyQuickReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_create_many_input_1.QuickReplyCreateManyInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyQuickReplyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyQuickReplyArgs.prototype, "skipDuplicates", void 0);
CreateManyQuickReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateManyQuickReplyArgs);
exports.CreateManyQuickReplyArgs = CreateManyQuickReplyArgs;
