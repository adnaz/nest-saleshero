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
exports.QuickReplyCreateNestedOneWithoutValuesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_create_without_values_input_1 = require("./quick-reply-create-without-values.input");
const quick_reply_create_or_connect_without_values_input_1 = require("./quick-reply-create-or-connect-without-values.input");
const quick_reply_where_unique_input_1 = require("./quick-reply-where-unique.input");
let QuickReplyCreateNestedOneWithoutValuesInput = class QuickReplyCreateNestedOneWithoutValuesInput {
};
__decorate([
    (0, graphql_1.Field)(() => quick_reply_create_without_values_input_1.QuickReplyCreateWithoutValuesInput, { nullable: true }),
    __metadata("design:type", quick_reply_create_without_values_input_1.QuickReplyCreateWithoutValuesInput)
], QuickReplyCreateNestedOneWithoutValuesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_create_or_connect_without_values_input_1.QuickReplyCreateOrConnectWithoutValuesInput, { nullable: true }),
    __metadata("design:type", quick_reply_create_or_connect_without_values_input_1.QuickReplyCreateOrConnectWithoutValuesInput)
], QuickReplyCreateNestedOneWithoutValuesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput, { nullable: true }),
    __metadata("design:type", quick_reply_where_unique_input_1.QuickReplyWhereUniqueInput)
], QuickReplyCreateNestedOneWithoutValuesInput.prototype, "connect", void 0);
QuickReplyCreateNestedOneWithoutValuesInput = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyCreateNestedOneWithoutValuesInput);
exports.QuickReplyCreateNestedOneWithoutValuesInput = QuickReplyCreateNestedOneWithoutValuesInput;
//# sourceMappingURL=quick-reply-create-nested-one-without-values.input.js.map