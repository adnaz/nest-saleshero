"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumTypeFileFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_file_enum_1 = require("./type-file.enum");
let NullableEnumTypeFileFieldUpdateOperationsInput = class NullableEnumTypeFileFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NullableEnumTypeFileFieldUpdateOperationsInput.prototype, "set", void 0);
NullableEnumTypeFileFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NullableEnumTypeFileFieldUpdateOperationsInput);
exports.NullableEnumTypeFileFieldUpdateOperationsInput = NullableEnumTypeFileFieldUpdateOperationsInput;
