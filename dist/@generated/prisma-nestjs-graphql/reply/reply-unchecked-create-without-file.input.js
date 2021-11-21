"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUncheckedCreateWithoutFileInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let ReplyUncheckedCreateWithoutFileInput = class ReplyUncheckedCreateWithoutFileInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyUncheckedCreateWithoutFileInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ReplyUncheckedCreateWithoutFileInput.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyUncheckedCreateWithoutFileInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ReplyUncheckedCreateWithoutFileInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyUncheckedCreateWithoutFileInput.prototype, "sectionId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyUncheckedCreateWithoutFileInput.prototype, "actorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyUncheckedCreateWithoutFileInput.prototype, "quickReplyId", void 0);
ReplyUncheckedCreateWithoutFileInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUncheckedCreateWithoutFileInput);
exports.ReplyUncheckedCreateWithoutFileInput = ReplyUncheckedCreateWithoutFileInput;
