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
const actor_model_1 = require("../actor/actor.model");
const graphql_4 = require("@nestjs/graphql");
let Reply = class Reply {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], Reply.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Reply.prototype, "text", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Reply.prototype, "audio", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Reply.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Reply.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_model_1.Actor, { nullable: true }),
    __metadata("design:type", actor_model_1.Actor)
], Reply.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    __metadata("design:type", Number)
], Reply.prototype, "userId", void 0);
Reply = __decorate([
    (0, graphql_2.ObjectType)()
], Reply);
exports.Reply = Reply;
//# sourceMappingURL=reply.model.js.map