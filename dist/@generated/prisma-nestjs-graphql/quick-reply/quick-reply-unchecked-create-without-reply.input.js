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
exports.QuickReplyUncheckedCreateWithoutReplyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const type_reply_enum_1 = require("../prisma/type-reply.enum");
const quick_reply_value_unchecked_create_nested_many_without_quick_reply_input_1 = require("../quick-reply-value/quick-reply-value-unchecked-create-nested-many-without-quick-reply.input");
const graphql_4 = require("@nestjs/graphql");
let QuickReplyUncheckedCreateWithoutReplyInput = class QuickReplyUncheckedCreateWithoutReplyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], QuickReplyUncheckedCreateWithoutReplyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], QuickReplyUncheckedCreateWithoutReplyInput.prototype, "keepIt", void 0);
__decorate([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: false }),
    __metadata("design:type", Object)
], QuickReplyUncheckedCreateWithoutReplyInput.prototype, "type", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", quick_reply_value_unchecked_create_nested_many_without_quick_reply_input_1.QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput)
], QuickReplyUncheckedCreateWithoutReplyInput.prototype, "values", void 0);
QuickReplyUncheckedCreateWithoutReplyInput = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyUncheckedCreateWithoutReplyInput);
exports.QuickReplyUncheckedCreateWithoutReplyInput = QuickReplyUncheckedCreateWithoutReplyInput;
//# sourceMappingURL=quick-reply-unchecked-create-without-reply.input.js.map