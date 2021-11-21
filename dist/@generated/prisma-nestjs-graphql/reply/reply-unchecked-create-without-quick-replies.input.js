"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUncheckedCreateWithoutQuickRepliesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let ReplyUncheckedCreateWithoutQuickRepliesInput = class ReplyUncheckedCreateWithoutQuickRepliesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyUncheckedCreateWithoutQuickRepliesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyUncheckedCreateWithoutQuickRepliesInput.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ReplyUncheckedCreateWithoutQuickRepliesInput.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyUncheckedCreateWithoutQuickRepliesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyUncheckedCreateWithoutQuickRepliesInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyUncheckedCreateWithoutQuickRepliesInput.prototype, "sectionId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyUncheckedCreateWithoutQuickRepliesInput.prototype, "actorId", void 0);
ReplyUncheckedCreateWithoutQuickRepliesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUncheckedCreateWithoutQuickRepliesInput);
exports.ReplyUncheckedCreateWithoutQuickRepliesInput = ReplyUncheckedCreateWithoutQuickRepliesInput;
