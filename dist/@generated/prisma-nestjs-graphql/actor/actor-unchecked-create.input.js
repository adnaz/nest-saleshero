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
exports.ActorUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const reply_unchecked_create_nested_many_without_user_input_1 = require("../reply/reply-unchecked-create-nested-many-without-user.input");
let ActorUncheckedCreateInput = class ActorUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ActorUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ActorUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ActorUncheckedCreateInput.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ActorUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ActorUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_unchecked_create_nested_many_without_user_input_1.ReplyUncheckedCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", reply_unchecked_create_nested_many_without_user_input_1.ReplyUncheckedCreateNestedManyWithoutUserInput)
], ActorUncheckedCreateInput.prototype, "replies", void 0);
ActorUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], ActorUncheckedCreateInput);
exports.ActorUncheckedCreateInput = ActorUncheckedCreateInput;
//# sourceMappingURL=actor-unchecked-create.input.js.map