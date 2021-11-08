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
exports.ReplyCreateOrConnectWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_create_without_user_input_1 = require("./reply-create-without-user.input");
let ReplyCreateOrConnectWithoutUserInput = class ReplyCreateOrConnectWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: false }),
    __metadata("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyCreateOrConnectWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_create_without_user_input_1.ReplyCreateWithoutUserInput, { nullable: false }),
    __metadata("design:type", reply_create_without_user_input_1.ReplyCreateWithoutUserInput)
], ReplyCreateOrConnectWithoutUserInput.prototype, "create", void 0);
ReplyCreateOrConnectWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], ReplyCreateOrConnectWithoutUserInput);
exports.ReplyCreateOrConnectWithoutUserInput = ReplyCreateOrConnectWithoutUserInput;
//# sourceMappingURL=reply-create-or-connect-without-user.input.js.map