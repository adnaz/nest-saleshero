"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reply = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const file_model_1 = require("../file/file.model");
const graphql_4 = require("@nestjs/graphql");
const section_model_1 = require("../section/section.model");
const actor_model_1 = require("../actor/actor.model");
const quick_reply_model_1 = require("../quick-reply/quick-reply.model");
let Reply = class Reply {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], Reply.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_model_1.File, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_model_1.File)
], Reply.prototype, "file", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Reply.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Reply.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], Reply.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], Reply.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_model_1.Section, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_model_1.Section)
], Reply.prototype, "section", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Reply.prototype, "sectionId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_model_1.Actor, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_model_1.Actor)
], Reply.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Reply.prototype, "actorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => quick_reply_model_1.QuickReply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", quick_reply_model_1.QuickReply)
], Reply.prototype, "quickReply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Reply.prototype, "quickReplyId", void 0);
Reply = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], Reply);
exports.Reply = Reply;
