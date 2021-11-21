"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_many_user_input_1 = require("./reply-create-many-user.input");
let ReplyCreateManyUserInputEnvelope = class ReplyCreateManyUserInputEnvelope {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_create_many_user_input_1.ReplyCreateManyUserInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyCreateManyUserInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReplyCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
ReplyCreateManyUserInputEnvelope = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyCreateManyUserInputEnvelope);
exports.ReplyCreateManyUserInputEnvelope = ReplyCreateManyUserInputEnvelope;
