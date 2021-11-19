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
exports.SectionUpdateOneRequiredWithoutRepliesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_without_replies_input_1 = require("./section-create-without-replies.input");
const section_create_or_connect_without_replies_input_1 = require("./section-create-or-connect-without-replies.input");
const section_upsert_without_replies_input_1 = require("./section-upsert-without-replies.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
const section_update_without_replies_input_1 = require("./section-update-without-replies.input");
let SectionUpdateOneRequiredWithoutRepliesInput = class SectionUpdateOneRequiredWithoutRepliesInput {
};
__decorate([
    (0, graphql_1.Field)(() => section_create_without_replies_input_1.SectionCreateWithoutRepliesInput, { nullable: true }),
    __metadata("design:type", section_create_without_replies_input_1.SectionCreateWithoutRepliesInput)
], SectionUpdateOneRequiredWithoutRepliesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_create_or_connect_without_replies_input_1.SectionCreateOrConnectWithoutRepliesInput, { nullable: true }),
    __metadata("design:type", section_create_or_connect_without_replies_input_1.SectionCreateOrConnectWithoutRepliesInput)
], SectionUpdateOneRequiredWithoutRepliesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_upsert_without_replies_input_1.SectionUpsertWithoutRepliesInput, { nullable: true }),
    __metadata("design:type", section_upsert_without_replies_input_1.SectionUpsertWithoutRepliesInput)
], SectionUpdateOneRequiredWithoutRepliesInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: true }),
    __metadata("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], SectionUpdateOneRequiredWithoutRepliesInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_update_without_replies_input_1.SectionUpdateWithoutRepliesInput, { nullable: true }),
    __metadata("design:type", section_update_without_replies_input_1.SectionUpdateWithoutRepliesInput)
], SectionUpdateOneRequiredWithoutRepliesInput.prototype, "update", void 0);
SectionUpdateOneRequiredWithoutRepliesInput = __decorate([
    (0, graphql_2.InputType)()
], SectionUpdateOneRequiredWithoutRepliesInput);
exports.SectionUpdateOneRequiredWithoutRepliesInput = SectionUpdateOneRequiredWithoutRepliesInput;
//# sourceMappingURL=section-update-one-required-without-replies.input.js.map