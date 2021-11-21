"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueUncheckedCreateWithoutQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let QuickReplyValueUncheckedCreateWithoutQuickReplyInput = class QuickReplyValueUncheckedCreateWithoutQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValueUncheckedCreateWithoutQuickReplyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], QuickReplyValueUncheckedCreateWithoutQuickReplyInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], QuickReplyValueUncheckedCreateWithoutQuickReplyInput.prototype, "value", void 0);
QuickReplyValueUncheckedCreateWithoutQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueUncheckedCreateWithoutQuickReplyInput);
exports.QuickReplyValueUncheckedCreateWithoutQuickReplyInput = QuickReplyValueUncheckedCreateWithoutQuickReplyInput;
