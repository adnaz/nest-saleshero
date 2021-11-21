"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionUpsertWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_update_without_replies_input_1 = require("./section-update-without-replies.input");
const section_create_without_replies_input_1 = require("./section-create-without-replies.input");
let SectionUpsertWithoutRepliesInput = class SectionUpsertWithoutRepliesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_without_replies_input_1.SectionUpdateWithoutRepliesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_update_without_replies_input_1.SectionUpdateWithoutRepliesInput)
], SectionUpsertWithoutRepliesInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_without_replies_input_1.SectionCreateWithoutRepliesInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_create_without_replies_input_1.SectionCreateWithoutRepliesInput)
], SectionUpsertWithoutRepliesInput.prototype, "create", void 0);
SectionUpsertWithoutRepliesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionUpsertWithoutRepliesInput);
exports.SectionUpsertWithoutRepliesInput = SectionUpsertWithoutRepliesInput;
