"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("./role.enum");
let EnumRoleFieldUpdateOperationsInput = class EnumRoleFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], EnumRoleFieldUpdateOperationsInput.prototype, "set", void 0);
EnumRoleFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], EnumRoleFieldUpdateOperationsInput);
exports.EnumRoleFieldUpdateOperationsInput = EnumRoleFieldUpdateOperationsInput;
