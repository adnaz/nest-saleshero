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
exports.QuickReplyCreateOrConnectWithoutReplyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
const quick_reply_create_without_reply_input_1 = require("./quick-reply-create-without-reply.input");
let QuickReplyCreateOrConnectWithoutReplyInput = class QuickReplyCreateOrConnectWithoutReplyInput {
};
__decorate([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: false }),
    __metadata("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], QuickReplyCreateOrConnectWithoutReplyInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput, { nullable: false }),
    __metadata("design:type", quick_reply_create_without_reply_input_1.QuickReplyCreateWithoutReplyInput)
], QuickReplyCreateOrConnectWithoutReplyInput.prototype, "create", void 0);
QuickReplyCreateOrConnectWithoutReplyInput = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyCreateOrConnectWithoutReplyInput);
exports.QuickReplyCreateOrConnectWithoutReplyInput = QuickReplyCreateOrConnectWithoutReplyInput;
//# sourceMappingURL=quick-reply-create-or-connect-without-reply.input.js.map