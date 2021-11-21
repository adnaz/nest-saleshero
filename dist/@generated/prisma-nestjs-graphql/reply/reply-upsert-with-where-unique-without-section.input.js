"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpsertWithWhereUniqueWithoutSectionInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_where_unique_input_1 = require("./reply-where-unique.input");
const reply_update_without_section_input_1 = require("./reply-update-without-section.input");
const reply_create_without_section_input_1 = require("./reply-create-without-section.input");
let ReplyUpsertWithWhereUniqueWithoutSectionInput = class ReplyUpsertWithWhereUniqueWithoutSectionInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_where_unique_input_1.ReplyWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_where_unique_input_1.ReplyWhereUniqueInput)
], ReplyUpsertWithWhereUniqueWithoutSectionInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_update_without_section_input_1.ReplyUpdateWithoutSectionInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_update_without_section_input_1.ReplyUpdateWithoutSectionInput)
], ReplyUpsertWithWhereUniqueWithoutSectionInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_create_without_section_input_1.ReplyCreateWithoutSectionInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", reply_create_without_section_input_1.ReplyCreateWithoutSectionInput)
], ReplyUpsertWithWhereUniqueWithoutSectionInput.prototype, "create", void 0);
ReplyUpsertWithWhereUniqueWithoutSectionInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ReplyUpsertWithWhereUniqueWithoutSectionInput);
exports.ReplyUpsertWithWhereUniqueWithoutSectionInput = ReplyUpsertWithWhereUniqueWithoutSectionInput;
