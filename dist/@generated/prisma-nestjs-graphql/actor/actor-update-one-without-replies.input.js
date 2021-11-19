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
exports.ActorUpdateOneWithoutRepliesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_create_without_replies_input_1 = require("./actor-create-without-replies.input");
const actor_create_or_connect_without_replies_input_1 = require("./actor-create-or-connect-without-replies.input");
const actor_upsert_without_replies_input_1 = require("./actor-upsert-without-replies.input");
const actor_where_unique_input_1 = require("./actor-where-unique.input");
const actor_update_without_replies_input_1 = require("./actor-update-without-replies.input");
let ActorUpdateOneWithoutRepliesInput = class ActorUpdateOneWithoutRepliesInput {
};
__decorate([
    (0, graphql_1.Field)(() => actor_create_without_replies_input_1.ActorCreateWithoutRepliesInput, { nullable: true }),
    __metadata("design:type", actor_create_without_replies_input_1.ActorCreateWithoutRepliesInput)
], ActorUpdateOneWithoutRepliesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_create_or_connect_without_replies_input_1.ActorCreateOrConnectWithoutRepliesInput, { nullable: true }),
    __metadata("design:type", actor_create_or_connect_without_replies_input_1.ActorCreateOrConnectWithoutRepliesInput)
], ActorUpdateOneWithoutRepliesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_upsert_without_replies_input_1.ActorUpsertWithoutRepliesInput, { nullable: true }),
    __metadata("design:type", actor_upsert_without_replies_input_1.ActorUpsertWithoutRepliesInput)
], ActorUpdateOneWithoutRepliesInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ActorUpdateOneWithoutRepliesInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ActorUpdateOneWithoutRepliesInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_where_unique_input_1.ActorWhereUniqueInput, { nullable: true }),
    __metadata("design:type", actor_where_unique_input_1.ActorWhereUniqueInput)
], ActorUpdateOneWithoutRepliesInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_update_without_replies_input_1.ActorUpdateWithoutRepliesInput, { nullable: true }),
    __metadata("design:type", actor_update_without_replies_input_1.ActorUpdateWithoutRepliesInput)
], ActorUpdateOneWithoutRepliesInput.prototype, "update", void 0);
ActorUpdateOneWithoutRepliesInput = __decorate([
    (0, graphql_2.InputType)()
], ActorUpdateOneWithoutRepliesInput);
exports.ActorUpdateOneWithoutRepliesInput = ActorUpdateOneWithoutRepliesInput;
//# sourceMappingURL=actor-update-one-without-replies.input.js.map