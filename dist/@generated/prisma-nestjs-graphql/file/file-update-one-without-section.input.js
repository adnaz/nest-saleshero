"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateOneWithoutSectionInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_without_section_input_1 = require("./file-create-without-section.input");
const file_create_or_connect_without_section_input_1 = require("./file-create-or-connect-without-section.input");
const file_upsert_without_section_input_1 = require("./file-upsert-without-section.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
const file_update_without_section_input_1 = require("./file-update-without-section.input");
let FileUpdateOneWithoutSectionInput = class FileUpdateOneWithoutSectionInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_section_input_1.FileCreateWithoutSectionInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_without_section_input_1.FileCreateWithoutSectionInput)
], FileUpdateOneWithoutSectionInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_or_connect_without_section_input_1.FileCreateOrConnectWithoutSectionInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_or_connect_without_section_input_1.FileCreateOrConnectWithoutSectionInput)
], FileUpdateOneWithoutSectionInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_upsert_without_section_input_1.FileUpsertWithoutSectionInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_upsert_without_section_input_1.FileUpsertWithoutSectionInput)
], FileUpdateOneWithoutSectionInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], FileUpdateOneWithoutSectionInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], FileUpdateOneWithoutSectionInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileUpdateOneWithoutSectionInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_without_section_input_1.FileUpdateWithoutSectionInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_update_without_section_input_1.FileUpdateWithoutSectionInput)
], FileUpdateOneWithoutSectionInput.prototype, "update", void 0);
FileUpdateOneWithoutSectionInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpdateOneWithoutSectionInput);
exports.FileUpdateOneWithoutSectionInput = FileUpdateOneWithoutSectionInput;
