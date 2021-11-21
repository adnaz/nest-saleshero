"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpsertWithoutSectionInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_update_without_section_input_1 = require("./file-update-without-section.input");
const file_create_without_section_input_1 = require("./file-create-without-section.input");
let FileUpsertWithoutSectionInput = class FileUpsertWithoutSectionInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_without_section_input_1.FileUpdateWithoutSectionInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_update_without_section_input_1.FileUpdateWithoutSectionInput)
], FileUpsertWithoutSectionInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_section_input_1.FileCreateWithoutSectionInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_create_without_section_input_1.FileCreateWithoutSectionInput)
], FileUpsertWithoutSectionInput.prototype, "create", void 0);
FileUpsertWithoutSectionInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpsertWithoutSectionInput);
exports.FileUpsertWithoutSectionInput = FileUpsertWithoutSectionInput;
