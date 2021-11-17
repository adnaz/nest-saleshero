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
exports.SectionCreateNestedOneWithoutRepliesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_without_replies_input_1 = require("./section-create-without-replies.input");
const section_create_or_connect_without_replies_input_1 = require("./section-create-or-connect-without-replies.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
let SectionCreateNestedOneWithoutRepliesInput = class SectionCreateNestedOneWithoutRepliesInput {
};
__decorate([
    (0, graphql_1.Field)(() => section_create_without_replies_input_1.SectionCreateWithoutRepliesInput, { nullable: true }),
    __metadata("design:type", section_create_without_replies_input_1.SectionCreateWithoutRepliesInput)
], SectionCreateNestedOneWithoutRepliesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_create_or_connect_without_replies_input_1.SectionCreateOrConnectWithoutRepliesInput, { nullable: true }),
    __metadata("design:type", section_create_or_connect_without_replies_input_1.SectionCreateOrConnectWithoutRepliesInput)
], SectionCreateNestedOneWithoutRepliesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: true }),
    __metadata("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], SectionCreateNestedOneWithoutRepliesInput.prototype, "connect", void 0);
SectionCreateNestedOneWithoutRepliesInput = __decorate([
    (0, graphql_2.InputType)()
], SectionCreateNestedOneWithoutRepliesInput);
exports.SectionCreateNestedOneWithoutRepliesInput = SectionCreateNestedOneWithoutRepliesInput;
//# sourceMappingURL=section-create-nested-one-without-replies.input.js.map