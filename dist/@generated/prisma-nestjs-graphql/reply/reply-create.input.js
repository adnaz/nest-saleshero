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
exports.ReplyCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_create_nested_one_without_replies_input_1 = require("../actor/actor-create-nested-one-without-replies.input");
let ReplyCreateInput = class ReplyCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ReplyCreateInput.prototype, "text", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ReplyCreateInput.prototype, "audio", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ReplyCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ReplyCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_create_nested_one_without_replies_input_1.ActorCreateNestedOneWithoutRepliesInput, { nullable: true }),
    __metadata("design:type", actor_create_nested_one_without_replies_input_1.ActorCreateNestedOneWithoutRepliesInput)
], ReplyCreateInput.prototype, "user", void 0);
ReplyCreateInput = __decorate([
    (0, graphql_2.InputType)()
], ReplyCreateInput);
exports.ReplyCreateInput = ReplyCreateInput;
//# sourceMappingURL=reply-create.input.js.map