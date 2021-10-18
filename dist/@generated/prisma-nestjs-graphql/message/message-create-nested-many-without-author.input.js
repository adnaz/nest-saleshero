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
exports.MessageCreateNestedManyWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const message_create_without_author_input_1 = require("./message-create-without-author.input");
const message_create_or_connect_without_author_input_1 = require("./message-create-or-connect-without-author.input");
const message_create_many_author_input_envelope_input_1 = require("./message-create-many-author-input-envelope.input");
const message_where_unique_input_1 = require("./message-where-unique.input");
let MessageCreateNestedManyWithoutAuthorInput = class MessageCreateNestedManyWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => [message_create_without_author_input_1.MessageCreateWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_create_or_connect_without_author_input_1.MessageCreateOrConnectWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_create_many_author_input_envelope_input_1.MessageCreateManyAuthorInputEnvelope, { nullable: true }),
    __metadata("design:type", message_create_many_author_input_envelope_input_1.MessageCreateManyAuthorInputEnvelope)
], MessageCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_where_unique_input_1.MessageWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
MessageCreateNestedManyWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], MessageCreateNestedManyWithoutAuthorInput);
exports.MessageCreateNestedManyWithoutAuthorInput = MessageCreateNestedManyWithoutAuthorInput;
//# sourceMappingURL=message-create-nested-many-without-author.input.js.map