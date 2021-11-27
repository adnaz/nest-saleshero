"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCountAggregate = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let ReplyCountAggregate = class ReplyCountAggregate {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCountAggregate.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCountAggregate.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCountAggregate.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCountAggregate.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCountAggregate.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCountAggregate.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCountAggregate.prototype, "sectionId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCountAggregate.prototype, "actorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCountAggregate.prototype, "quickReplyId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReplyCountAggregate.prototype, "_all", void 0);
ReplyCountAggregate = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], ReplyCountAggregate);
exports.ReplyCountAggregate = ReplyCountAggregate;
