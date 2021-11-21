"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateOrConnectWithoutSectionInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_where_unique_input_1 = require("./file-where-unique.input");
const file_create_without_section_input_1 = require("./file-create-without-section.input");
let FileCreateOrConnectWithoutSectionInput = class FileCreateOrConnectWithoutSectionInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileCreateOrConnectWithoutSectionInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_section_input_1.FileCreateWithoutSectionInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_create_without_section_input_1.FileCreateWithoutSectionInput)
], FileCreateOrConnectWithoutSectionInput.prototype, "create", void 0);
FileCreateOrConnectWithoutSectionInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileCreateOrConnectWithoutSectionInput);
exports.FileCreateOrConnectWithoutSectionInput = FileCreateOrConnectWithoutSectionInput;
