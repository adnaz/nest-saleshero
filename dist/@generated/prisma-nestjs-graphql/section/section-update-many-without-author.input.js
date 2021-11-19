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
exports.SectionUpdateManyWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_without_author_input_1 = require("./section-create-without-author.input");
const section_create_or_connect_without_author_input_1 = require("./section-create-or-connect-without-author.input");
const section_upsert_with_where_unique_without_author_input_1 = require("./section-upsert-with-where-unique-without-author.input");
const section_create_many_author_input_envelope_input_1 = require("./section-create-many-author-input-envelope.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
const section_update_with_where_unique_without_author_input_1 = require("./section-update-with-where-unique-without-author.input");
const section_update_many_with_where_without_author_input_1 = require("./section-update-many-with-where-without-author.input");
const section_scalar_where_input_1 = require("./section-scalar-where.input");
let SectionUpdateManyWithoutAuthorInput = class SectionUpdateManyWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => [section_create_without_author_input_1.SectionCreateWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUpdateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_create_or_connect_without_author_input_1.SectionCreateOrConnectWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_upsert_with_where_unique_without_author_input_1.SectionUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_create_many_author_input_envelope_input_1.SectionCreateManyAuthorInputEnvelope, { nullable: true }),
    __metadata("design:type", section_create_many_author_input_envelope_input_1.SectionCreateManyAuthorInputEnvelope)
], SectionUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUpdateManyWithoutAuthorInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_update_with_where_unique_without_author_input_1.SectionUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUpdateManyWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_update_many_with_where_without_author_input_1.SectionUpdateManyWithWhereWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_scalar_where_input_1.SectionScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
SectionUpdateManyWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], SectionUpdateManyWithoutAuthorInput);
exports.SectionUpdateManyWithoutAuthorInput = SectionUpdateManyWithoutAuthorInput;
//# sourceMappingURL=section-update-many-without-author.input.js.map