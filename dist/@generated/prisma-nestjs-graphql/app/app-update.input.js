"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUpdateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const user_update_one_without_apps_input_1 = require("../user/user-update-one-without-apps.input");
let AppUpdateInput = class AppUpdateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], AppUpdateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], AppUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], AppUpdateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_one_without_apps_input_1.UserUpdateOneWithoutAppsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_update_one_without_apps_input_1.UserUpdateOneWithoutAppsInput)
], AppUpdateInput.prototype, "author", void 0);
AppUpdateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppUpdateInput);
exports.AppUpdateInput = AppUpdateInput;
