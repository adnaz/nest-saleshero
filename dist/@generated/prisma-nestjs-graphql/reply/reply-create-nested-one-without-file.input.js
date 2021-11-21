"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateNestedOneWithoutFileInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_without_file_input_1 = require("./reply-create-without-file.input");
const reply_create_or_connect_without_file_input_1 = require("./reply-create-or-connect-without-file.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
let ReplyCreateNestedOneWithoutFileInput = class ReplyCreateNestedOneWithoutFileInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_file_input_1.ReplyCreateWithoutFileInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_file_input_1.ReplyCreateWithoutFileInput)
], ReplyCreateNestedOneWithoutFileInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_or_connect_without_file_input_1.ReplyCreateOrConnectWithoutFileInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_or_connect_without_file_input_1.ReplyCreateOrConnectWithoutFileInput)
], ReplyCreateNestedOneWithoutFileInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyCreateNestedOneWithoutFileInput.prototype, "connect", void 0);
ReplyCreateNestedOneWithoutFileInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyCreateNestedOneWithoutFileInput);
exports.ReplyCreateNestedOneWithoutFileInput = ReplyCreateNestedOneWithoutFileInput;
