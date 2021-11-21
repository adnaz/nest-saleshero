"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_update_without_user_input_1 = require("./reply-update-without-user.input");
const reply_create_without_user_input_1 = require("./reply-create-without-user.input");
let ReplyUpsertWithWhereUniqueWithoutUserInput = class ReplyUpsertWithWhereUniqueWithoutUserInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_without_user_input_1.ReplyUpdateWithoutUserInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_update_without_user_input_1.ReplyUpdateWithoutUserInput)
], ReplyUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_user_input_1.ReplyCreateWithoutUserInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_user_input_1.ReplyCreateWithoutUserInput)
], ReplyUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
ReplyUpsertWithWhereUniqueWithoutUserInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUpsertWithWhereUniqueWithoutUserInput);
exports.ReplyUpsertWithWhereUniqueWithoutUserInput = ReplyUpsertWithWhereUniqueWithoutUserInput;
