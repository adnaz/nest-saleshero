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
exports.QuickReplyUpdateOneWithoutReplyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_create_without_reply_input_1 = require("./quick-reply-create-without-reply.input");
const quick_reply_create_or_connect_without_reply_input_1 = require("./quick-reply-create-or-connect-without-reply.input");
const quick_reply_upsert_without_reply_input_1 = require("./quick-reply-upsert-without-reply.input");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
const quick_reply_update_without_reply_input_1 = require("./quick-reply-update-without-reply.input");
let QuickReplyUpdateOneWithoutReplyInput = class QuickReplyUpdateOneWithoutReplyInput {
};
__decorate([
    (0, graphql_1.Field)(() => quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput, { nullable: true }),
    __metadata("design:type", quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_create_or_connect_without_reply_input_1.QuickReplyCreateOrConnectWithoutReplyInput, { nullable: true }),
    __metadata("design:type", quick_reply_create_or_connect_without_reply_input_1.QuickReplyCreateOrConnectWithoutReplyInput)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_upsert_without_reply_input_1.QuickReplyUpsertWithoutReplyInput, { nullable: true }),
    __metadata("design:type", quick_reply_upsert_without_reply_input_1.QuickReplyUpsertWithoutReplyInput)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: true }),
    __metadata("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_update_without_reply_input_1.QuickReplyUpdateWithoutReplyInput, { nullable: true }),
    __metadata("design:type", quick_reply_update_without_reply_input_1.QuickReplyUpdateWithoutReplyInput)
], QuickReplyUpdateOneWithoutReplyInput.prototype, "update", void 0);
QuickReplyUpdateOneWithoutReplyInput = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyUpdateOneWithoutReplyInput);
exports.QuickReplyUpdateOneWithoutReplyInput = QuickReplyUpdateOneWithoutReplyInput;
//# sourceMappingURL=quick-reply-update-one-without-reply.input.js.map