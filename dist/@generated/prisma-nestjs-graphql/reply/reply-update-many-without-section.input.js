"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateManyWithoutSectionInput = void 0;
const tslib_1 = require("tslib");
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
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_create_without_section_input_1.ReplyCreateWithoutSectionInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_create_or_connect_without_section_input_1.ReplyCreateOrConnectWithoutSectionInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_upsert_with_where_unique_without_section_input_1.ReplyUpsertWithWhereUniqueWithoutSectionInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_many_section_input_envelope_input_1.ReplyCreateManySectionInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_many_section_input_envelope_input_1.ReplyCreateManySectionInputEnvelope)
], ReplyUpdateManyWithoutSectionInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_update_with_where_unique_without_section_input_1.ReplyUpdateWithWhereUniqueWithoutSectionInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_update_many_with_where_without_section_input_1.ReplyUpdateManyWithWhereWithoutSectionInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_scalar_where_input_1.ReplyScalarWhereInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUpdateManyWithoutSectionInput.prototype, "deleteMany", void 0);
ReplyUpdateManyWithoutSectionInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUpdateManyWithoutSectionInput);
exports.ReplyUpdateManyWithoutSectionInput = ReplyUpdateManyWithoutSectionInput;
