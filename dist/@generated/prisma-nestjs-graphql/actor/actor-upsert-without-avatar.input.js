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
exports.ActorUpsertWithoutAvatarInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_update_without_avatar_input_1 = require("./actor-update-without-avatar.input");
const actor_create_without_avatar_input_1 = require("./actor-create-without-avatar.input");
let ActorUpsertWithoutAvatarInput = class ActorUpsertWithoutAvatarInput {
};
__decorate([
    (0, graphql_1.Field)(() => actor_update_without_avatar_input_1.ActorUpdateWithoutAvatarInput, { nullable: false }),
    __metadata("design:type", actor_update_without_avatar_input_1.ActorUpdateWithoutAvatarInput)
], ActorUpsertWithoutAvatarInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_create_without_avatar_input_1.ActorCreateWithoutAvatarInput, { nullable: false }),
    __metadata("design:type", actor_create_without_avatar_input_1.ActorCreateWithoutAvatarInput)
], ActorUpsertWithoutAvatarInput.prototype, "create", void 0);
ActorUpsertWithoutAvatarInput = __decorate([
    (0, graphql_2.InputType)()
], ActorUpsertWithoutAvatarInput);
exports.ActorUpsertWithoutAvatarInput = ActorUpsertWithoutAvatarInput;
//# sourceMappingURL=actor-upsert-without-avatar.input.js.map