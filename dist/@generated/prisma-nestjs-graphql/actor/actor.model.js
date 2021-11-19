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
exports.Actor = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const file_model_1 = require("../file/file.model");
const graphql_4 = require("@nestjs/graphql");
const reply_model_1 = require("../reply/reply.model");
const actor_count_output_1 = require("./actor-count.output");
let Actor = class Actor {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], Actor.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Actor.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_model_1.File, { nullable: true }),
    __metadata("design:type", file_model_1.File)
], Actor.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    __metadata("design:type", Number)
], Actor.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_model_1.Reply], { nullable: true }),
    __metadata("design:type", Array)
], Actor.prototype, "replies", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Actor.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Actor.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_count_output_1.ActorCount, { nullable: false }),
    __metadata("design:type", actor_count_output_1.ActorCount)
], Actor.prototype, "_count", void 0);
Actor = __decorate([
    (0, graphql_2.ObjectType)()
], Actor);
exports.Actor = Actor;
//# sourceMappingURL=actor.model.js.map