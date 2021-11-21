"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueCreateWithoutQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let QuickReplyValueCreateWithoutQuickReplyInput = class QuickReplyValueCreateWithoutQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], QuickReplyValueCreateWithoutQuickReplyInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], QuickReplyValueCreateWithoutQuickReplyInput.prototype, "value", void 0);
QuickReplyValueCreateWithoutQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueCreateWithoutQuickReplyInput);
exports.QuickReplyValueCreateWithoutQuickReplyInput = QuickReplyValueCreateWithoutQuickReplyInput;
