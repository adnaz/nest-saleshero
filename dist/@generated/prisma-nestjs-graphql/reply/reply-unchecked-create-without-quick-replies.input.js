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
exports.ReplyUncheckedCreateWithoutQuickRepliesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let ReplyUncheckedCreateWithoutQuickRepliesInput = class ReplyUncheckedCreateWithoutQuickRepliesInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ReplyUncheckedCreateWithoutQuickRepliesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ReplyUncheckedCreateWithoutQuickRepliesInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ReplyUncheckedCreateWithoutQuickRepliesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ReplyUncheckedCreateWithoutQuickRepliesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], ReplyUncheckedCreateWithoutQuickRepliesInput.prototype, "sectionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ReplyUncheckedCreateWithoutQuickRepliesInput.prototype, "actorId", void 0);
ReplyUncheckedCreateWithoutQuickRepliesInput = __decorate([
    (0, graphql_2.InputType)()
], ReplyUncheckedCreateWithoutQuickRepliesInput);
exports.ReplyUncheckedCreateWithoutQuickRepliesInput = ReplyUncheckedCreateWithoutQuickRepliesInput;
//# sourceMappingURL=reply-unchecked-create-without-quick-replies.input.js.map