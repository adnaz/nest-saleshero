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
exports.ReplyUpdateManyWithoutSectionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_without_section_input_1 = require("./reply-create-without-section.input");
const reply_create_or_connect_without_section_input_1 = require("./reply-create-or-connect-without-section.input");
const reply_upsert_with_where_unique_without_section_input_1 = require("./reply-upsert-with-where-unique-without-section.input");
const reply_create_many_section_input_envelope_input_1 = require("./reply-create-many-section-input-envelope.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_update_with_where_unique_without_section_input_1 = require("./reply-update-with-where-unique-without-section.input");
const reply_update_many_with_where_without_section_input_1 = require("./reply-update-many-with-where-without-section.input");
const reply_scalar_where_input_1 = require("./reply-scalar-where.input");
let ReplyUpdateManyWithoutSectionInput = class ReplyUpdateManyWithoutSectionInput {
};
__decorate([
    (0, graphql_1.Field)(() => [reply_create_without_section_input_1.ReplyCreateWithoutSectionInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_create_or_connect_without_section_input_1.ReplyCreateOrConnectWithoutSectionInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_upsert_with_where_unique_without_section_input_1.ReplyUpsertWithWhereUniqueWithoutSectionInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_create_many_section_input_envelope_input_1.ReplyCreateManySectionInputEnvelope, { nullable: true }),
    __metadata("design:type", reply_create_many_section_input_envelope_input_1.ReplyCreateManySectionInputEnvelope)
], ReplyUpdateManyWithoutSectionInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_update_with_where_unique_without_section_input_1.ReplyUpdateWithWhereUniqueWithoutSectionInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_update_many_with_where_without_section_input_1.ReplyUpdateManyWithWhereWithoutSectionInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_scalar_where_input_1.ReplyScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "deleteMany", void 0);
ReplyUpdateManyWithoutSectionInput = __decorate([
    (0, graphql_2.InputType)()
], ReplyUpdateManyWithoutSectionInput);
exports.ReplyUpdateManyWithoutSectionInput = ReplyUpdateManyWithoutSectionInput;
//# sourceMappingURL=reply-update-many-without-section.input.js.map