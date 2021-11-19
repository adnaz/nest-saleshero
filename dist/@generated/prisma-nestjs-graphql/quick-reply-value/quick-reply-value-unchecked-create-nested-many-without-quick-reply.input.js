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
exports.QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_create_without_quick_reply_input_1 = require("./quick-reply-value-create-without-quick-reply.input");
const quick_reply_value_create_or_connect_without_quick_reply_input_1 = require("./quick-reply-value-create-or-connect-without-quick-reply.input");
const quick_reply_value_create_many_quick_reply_input_envelope_input_1 = require("./quick-reply-value-create-many-quick-reply-input-envelope.input");
const quick_reply_value_where_unique_input_1 = require("./quick-reply-value-where-unique.input");
let QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput = class QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput {
};
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_create_without_quick_reply_input_1.QuickReplyValueCreateWithoutQuickReplyInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_create_or_connect_without_quick_reply_input_1.QuickReplyValueCreateOrConnectWithoutQuickReplyInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_create_many_quick_reply_input_envelope_input_1.QuickReplyValueCreateManyQuickReplyInputEnvelope, { nullable: true }),
    __metadata("design:type", quick_reply_value_create_many_quick_reply_input_envelope_input_1.QuickReplyValueCreateManyQuickReplyInputEnvelope)
], QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput.prototype, "connect", void 0);
QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput);
exports.QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput = QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput;
//# sourceMappingURL=quick-reply-value-unchecked-create-nested-many-without-quick-reply.input.js.map