"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateOrConnectWithoutFileInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_create_without_file_input_1 = require("./reply-create-without-file.input");
let ReplyCreateOrConnectWithoutFileInput = class ReplyCreateOrConnectWithoutFileInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyCreateOrConnectWithoutFileInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_file_input_1.ReplyCreateWithoutFileInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_file_input_1.ReplyCreateWithoutFileInput)
], ReplyCreateOrConnectWithoutFileInput.prototype, "create", void 0);
ReplyCreateOrConnectWithoutFileInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyCreateOrConnectWithoutFileInput);
exports.ReplyCreateOrConnectWithoutFileInput = ReplyCreateOrConnectWithoutFileInput;
