"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateNestedOneWithoutSectionInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_without_section_input_1 = require("./file-create-without-section.input");
const file_create_or_connect_without_section_input_1 = require("./file-create-or-connect-without-section.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
let FileCreateNestedOneWithoutSectionInput = class FileCreateNestedOneWithoutSectionInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_section_input_1.FileCreateWithoutSectionInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_without_section_input_1.FileCreateWithoutSectionInput)
], FileCreateNestedOneWithoutSectionInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_or_connect_without_section_input_1.FileCreateOrConnectWithoutSectionInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_or_connect_without_section_input_1.FileCreateOrConnectWithoutSectionInput)
], FileCreateNestedOneWithoutSectionInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileCreateNestedOneWithoutSectionInput.prototype, "connect", void 0);
FileCreateNestedOneWithoutSectionInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileCreateNestedOneWithoutSectionInput);
exports.FileCreateNestedOneWithoutSectionInput = FileCreateNestedOneWithoutSectionInput;
