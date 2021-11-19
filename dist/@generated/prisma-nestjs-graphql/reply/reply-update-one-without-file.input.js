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
exports.ReplyUpdateOneWithoutFileInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_without_file_input_1 = require("./reply-create-without-file.input");
const reply_create_or_connect_without_file_input_1 = require("./reply-create-or-connect-without-file.input");
const reply_upsert_without_file_input_1 = require("./reply-upsert-without-file.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_update_without_file_input_1 = require("./reply-update-without-file.input");
let ReplyUpdateOneWithoutFileInput = class ReplyUpdateOneWithoutFileInput {
};
__decorate([
    (0, graphql_1.Field)(() => reply_create_without_file_input_1.ReplyCreateWithoutFileInput, { nullable: true }),
    __metadata("design:type", reply_create_without_file_input_1.ReplyCreateWithoutFileInput)
], ReplyUpdateOneWithoutFileInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_create_or_connect_without_file_input_1.ReplyCreateOrConnectWithoutFileInput, { nullable: true }),
    __metadata("design:type", reply_create_or_connect_without_file_input_1.ReplyCreateOrConnectWithoutFileInput)
], ReplyUpdateOneWithoutFileInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_upsert_without_file_input_1.ReplyUpsertWithoutFileInput, { nullable: true }),
    __metadata("design:type", reply_upsert_without_file_input_1.ReplyUpsertWithoutFileInput)
], ReplyUpdateOneWithoutFileInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ReplyUpdateOneWithoutFileInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ReplyUpdateOneWithoutFileInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: true }),
    __metadata("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyUpdateOneWithoutFileInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_update_without_file_input_1.ReplyUpdateWithoutFileInput, { nullable: true }),
    __metadata("design:type", reply_update_without_file_input_1.ReplyUpdateWithoutFileInput)
], ReplyUpdateOneWithoutFileInput.prototype, "update", void 0);
ReplyUpdateOneWithoutFileInput = __decorate([
    (0, graphql_2.InputType)()
], ReplyUpdateOneWithoutFileInput);
exports.ReplyUpdateOneWithoutFileInput = ReplyUpdateOneWithoutFileInput;
//# sourceMappingURL=reply-update-one-without-file.input.js.map