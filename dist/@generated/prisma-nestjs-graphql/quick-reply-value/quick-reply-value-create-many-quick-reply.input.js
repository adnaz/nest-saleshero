"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueCreateManyQuickReplyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let QuickReplyValueCreateManyQuickReplyInput = class QuickReplyValueCreateManyQuickReplyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], QuickReplyValueCreateManyQuickReplyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], QuickReplyValueCreateManyQuickReplyInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], QuickReplyValueCreateManyQuickReplyInput.prototype, "value", void 0);
QuickReplyValueCreateManyQuickReplyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], QuickReplyValueCreateManyQuickReplyInput);
exports.QuickReplyValueCreateManyQuickReplyInput = QuickReplyValueCreateManyQuickReplyInput;
