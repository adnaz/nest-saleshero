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
exports.FileUpsertWithoutReplyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_update_without_reply_input_1 = require("./file-update-without-reply.input");
const file_create_without_reply_input_1 = require("./file-create-without-reply.input");
let FileUpsertWithoutReplyInput = class FileUpsertWithoutReplyInput {
};
__decorate([
    (0, graphql_1.Field)(() => file_update_without_reply_input_1.FileUpdateWithoutReplyInput, { nullable: false }),
    __metadata("design:type", file_update_without_reply_input_1.FileUpdateWithoutReplyInput)
], FileUpsertWithoutReplyInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_create_without_reply_input_1.FileCreateWithoutReplyInput, { nullable: false }),
    __metadata("design:type", file_create_without_reply_input_1.FileCreateWithoutReplyInput)
], FileUpsertWithoutReplyInput.prototype, "create", void 0);
FileUpsertWithoutReplyInput = __decorate([
    (0, graphql_2.InputType)()
], FileUpsertWithoutReplyInput);
exports.FileUpsertWithoutReplyInput = FileUpsertWithoutReplyInput;
//# sourceMappingURL=file-upsert-without-reply.input.js.map