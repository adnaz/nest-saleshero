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
exports.MessageCreateOrConnectWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const message_where_unique_input_1 = require("./message-where-unique.input");
const message_create_without_author_input_1 = require("./message-create-without-author.input");
let MessageCreateOrConnectWithoutAuthorInput = class MessageCreateOrConnectWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => message_where_unique_input_1.MessageWhereUniqueInput, { nullable: false }),
    __metadata("design:type", message_where_unique_input_1.MessageWhereUniqueInput)
], MessageCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_create_without_author_input_1.MessageCreateWithoutAuthorInput, { nullable: false }),
    __metadata("design:type", message_create_without_author_input_1.MessageCreateWithoutAuthorInput)
], MessageCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
MessageCreateOrConnectWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], MessageCreateOrConnectWithoutAuthorInput);
exports.MessageCreateOrConnectWithoutAuthorInput = MessageCreateOrConnectWithoutAuthorInput;
//# sourceMappingURL=message-create-or-connect-without-author.input.js.map