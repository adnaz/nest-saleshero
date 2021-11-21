"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_input_1 = require("./reply-create.input");
let CreateOneReplyArgs = class CreateOneReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_input_1.ReplyCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_create_input_1.ReplyCreateInput)
], CreateOneReplyArgs.prototype, "data", void 0);
CreateOneReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateOneReplyArgs);
exports.CreateOneReplyArgs = CreateOneReplyArgs;
