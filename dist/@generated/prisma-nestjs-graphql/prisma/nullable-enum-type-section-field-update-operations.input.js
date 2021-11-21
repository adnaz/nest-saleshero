"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumTypeSectionFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_section_enum_1 = require("./type-section.enum");
let NullableEnumTypeSectionFieldUpdateOperationsInput = class NullableEnumTypeSectionFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NullableEnumTypeSectionFieldUpdateOperationsInput.prototype, "set", void 0);
NullableEnumTypeSectionFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NullableEnumTypeSectionFieldUpdateOperationsInput);
exports.NullableEnumTypeSectionFieldUpdateOperationsInput = NullableEnumTypeSectionFieldUpdateOperationsInput;
