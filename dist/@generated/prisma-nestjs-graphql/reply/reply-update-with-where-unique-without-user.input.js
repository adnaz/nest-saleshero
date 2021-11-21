"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_update_without_user_input_1 = require("./reply-update-without-user.input");
let ReplyUpdateWithWhereUniqueWithoutUserInput = class ReplyUpdateWithWhereUniqueWithoutUserInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_without_user_input_1.ReplyUpdateWithoutUserInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_update_without_user_input_1.ReplyUpdateWithoutUserInput)
], ReplyUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
ReplyUpdateWithWhereUniqueWithoutUserInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUpdateWithWhereUniqueWithoutUserInput);
exports.ReplyUpdateWithWhereUniqueWithoutUserInput = ReplyUpdateWithWhereUniqueWithoutUserInput;
