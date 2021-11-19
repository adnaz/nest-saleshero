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
exports.ActorUpdateOneWithoutAvatarInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_create_without_avatar_input_1 = require("./actor-create-without-avatar.input");
const actor_create_or_connect_without_avatar_input_1 = require("./actor-create-or-connect-without-avatar.input");
const actor_upsert_without_avatar_input_1 = require("./actor-upsert-without-avatar.input");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
const actor_update_without_avatar_input_1 = require("./actor-update-without-avatar.input");
let ActorUpdateOneWithoutAvatarInput = class ActorUpdateOneWithoutAvatarInput {
};
__decorate([
    (0, graphql_1.Field)(() => actor_create_without_avatar_input_1.ActorCreateWithoutAvatarInput, { nullable: true }),
    __metadata("design:type", actor_create_without_avatar_input_1.ActorCreateWithoutAvatarInput)
], ActorUpdateOneWithoutAvatarInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_create_or_connect_without_avatar_input_1.ActorCreateOrConnectWithoutAvatarInput, { nullable: true }),
    __metadata("design:type", actor_create_or_connect_without_avatar_input_1.ActorCreateOrConnectWithoutAvatarInput)
], ActorUpdateOneWithoutAvatarInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_upsert_without_avatar_input_1.ActorUpsertWithoutAvatarInput, { nullable: true }),
    __metadata("design:type", actor_upsert_without_avatar_input_1.ActorUpsertWithoutAvatarInput)
], ActorUpdateOneWithoutAvatarInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ActorUpdateOneWithoutAvatarInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ActorUpdateOneWithoutAvatarInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: true }),
    __metadata("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], ActorUpdateOneWithoutAvatarInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_update_without_avatar_input_1.ActorUpdateWithoutAvatarInput, { nullable: true }),
    __metadata("design:type", actor_update_without_avatar_input_1.ActorUpdateWithoutAvatarInput)
], ActorUpdateOneWithoutAvatarInput.prototype, "update", void 0);
ActorUpdateOneWithoutAvatarInput = __decorate([
    (0, graphql_2.InputType)()
], ActorUpdateOneWithoutAvatarInput);
exports.ActorUpdateOneWithoutAvatarInput = ActorUpdateOneWithoutAvatarInput;
//# sourceMappingURL=actor-update-one-without-avatar.input.js.map