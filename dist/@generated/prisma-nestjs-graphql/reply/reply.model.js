"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reply = void 0;
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
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], Reply.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_model_1.File, { nullable: true }),
    __metadata("design:type", file_model_1.File)
], Reply.prototype, "file", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    __metadata("design:type", Number)
], Reply.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Reply.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Reply.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_model_1.Section, { nullable: false }),
    __metadata("design:type", section_model_1.Section)
], Reply.prototype, "section", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], Reply.prototype, "sectionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_model_1.Actor, { nullable: true }),
    __metadata("design:type", actor_model_1.Actor)
], Reply.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    __metadata("design:type", Number)
], Reply.prototype, "actorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_model_1.QuickReply, { nullable: true }),
    __metadata("design:type", quick_reply_model_1.QuickReply)
], Reply.prototype, "quickReplies", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    __metadata("design:type", Number)
], Reply.prototype, "quickRepliesId", void 0);
Reply = __decorate([
    (0, graphql_2.ObjectType)()
], Reply);
exports.Reply = Reply;
//# sourceMappingURL=reply.model.js.map