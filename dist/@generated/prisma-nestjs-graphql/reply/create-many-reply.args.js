"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReplyArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_many_input_1 = require("./reply-create-many.input");
let CreateManyReplyArgs = class CreateManyReplyArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_create_many_input_1.ReplyCreateManyInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyReplyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyReplyArgs.prototype, "skipDuplicates", void 0);
CreateManyReplyArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateManyReplyArgs);
exports.CreateManyReplyArgs = CreateManyReplyArgs;
