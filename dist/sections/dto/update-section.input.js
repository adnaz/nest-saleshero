"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSectionInput = void 0;
const tslib_1 = require("tslib");
const create_section_input_1 = require("./create-section.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateSectionInput = class UpdateSectionInput extends (0, graphql_1.PartialType)(create_section_input_1.CreateSectionInput) {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, tslib_1.__metadata)("design:type", Number)
], UpdateSectionInput.prototype, "id", void 0);
UpdateSectionInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], UpdateSectionInput);
exports.UpdateSectionInput = UpdateSectionInput;
