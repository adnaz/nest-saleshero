"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_where_unique_input_1 = require("./quick-reply-value-where-unique.input");
const quick_reply_value_update_without_quick_reply_input_1 = require("./quick-reply-value-update-without-quick-reply.input");
let QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput = class QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput)
], QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_value_update_without_quick_reply_input_1.QuickReplyValueUpdateWithoutQuickReplyInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", quick_reply_value_update_without_quick_reply_input_1.QuickReplyValueUpdateWithoutQuickReplyInput)
], QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput.prototype, "data", void 0);
QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput);
exports.QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput = QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput;
