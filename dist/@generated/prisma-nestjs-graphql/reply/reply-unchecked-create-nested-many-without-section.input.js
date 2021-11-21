"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUncheckedCreateNestedManyWithoutSectionInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_create_without_section_input_1 = require("./reply-create-without-section.input");
const reply_create_or_connect_without_section_input_1 = require("./reply-create-or-connect-without-section.input");
const reply_create_many_section_input_envelope_input_1 = require("./reply-create-many-section-input-envelope.input");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
let ReplyUncheckedCreateNestedManyWithoutSectionInput = class ReplyUncheckedCreateNestedManyWithoutSectionInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_create_without_section_input_1.ReplyCreateWithoutSectionInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUncheckedCreateNestedManyWithoutSectionInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_create_or_connect_without_section_input_1.ReplyCreateOrConnectWithoutSectionInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUncheckedCreateNestedManyWithoutSectionInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_many_section_input_envelope_input_1.ReplyCreateManySectionInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_create_many_section_input_envelope_input_1.ReplyCreateManySectionInputEnvelope)
], ReplyUncheckedCreateNestedManyWithoutSectionInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [reply_where_unique_input_1.ReplyWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], ReplyUncheckedCreateNestedManyWithoutSectionInput.prototype, "connect", void 0);
ReplyUncheckedCreateNestedManyWithoutSectionInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUncheckedCreateNestedManyWithoutSectionInput);
exports.ReplyUncheckedCreateNestedManyWithoutSectionInput = ReplyUncheckedCreateNestedManyWithoutSectionInput;
