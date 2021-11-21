"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpsertWithoutFileInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_update_without_file_input_1 = require("./reply-update-without-file.input");
const reply_create_without_file_input_1 = require("./reply-create-without-file.input");
let ReplyUpsertWithoutFileInput = class ReplyUpsertWithoutFileInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_without_file_input_1.ReplyUpdateWithoutFileInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_update_without_file_input_1.ReplyUpdateWithoutFileInput)
], ReplyUpsertWithoutFileInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_file_input_1.ReplyCreateWithoutFileInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_file_input_1.ReplyCreateWithoutFileInput)
], ReplyUpsertWithoutFileInput.prototype, "create", void 0);
ReplyUpsertWithoutFileInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUpsertWithoutFileInput);
exports.ReplyUpsertWithoutFileInput = ReplyUpsertWithoutFileInput;
