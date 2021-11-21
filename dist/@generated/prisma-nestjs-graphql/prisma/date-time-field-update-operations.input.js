"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let DateTimeFieldUpdateOperationsInput = class DateTimeFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], DateTimeFieldUpdateOperationsInput.prototype, "set", void 0);
DateTimeFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], DateTimeFieldUpdateOperationsInput);
exports.DateTimeFieldUpdateOperationsInput = DateTimeFieldUpdateOperationsInput;
