"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const file_model_1 = require("../file/file.model");
const graphql_4 = require("@nestjs/graphql");
const reply_model_1 = require("../reply/reply.model");
const actor_count_output_1 = require("./actor-count.output");
let Actor = class Actor {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], Actor.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Actor.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_model_1.File, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_model_1.File)
], Actor.prototype, "avatar", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Actor.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_model_1.Reply], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Actor.prototype, "replies", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], Actor.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], Actor.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_count_output_1.ActorCount, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_count_output_1.ActorCount)
], Actor.prototype, "_count", void 0);
Actor = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], Actor);
exports.Actor = Actor;
