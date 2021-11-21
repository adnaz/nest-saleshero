"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyQuickReplyValueArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_create_many_input_1 = require("./quick-reply-value-create-many.input");
let CreateManyQuickReplyValueArgs = class CreateManyQuickReplyValueArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [quick_reply_value_create_many_input_1.QuickReplyValueCreateManyInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyQuickReplyValueArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyQuickReplyValueArgs.prototype, "skipDuplicates", void 0);
CreateManyQuickReplyValueArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateManyQuickReplyValueArgs);
exports.CreateManyQuickReplyValueArgs = CreateManyQuickReplyValueArgs;
