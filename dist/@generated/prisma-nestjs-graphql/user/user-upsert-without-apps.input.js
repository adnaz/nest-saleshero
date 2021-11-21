"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAppsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_update_without_apps_input_1 = require("./user-update-without-apps.input");
const user_create_without_apps_input_1 = require("./user-create-without-apps.input");
let UserUpsertWithoutAppsInput = class UserUpsertWithoutAppsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_without_apps_input_1.UserUpdateWithoutAppsInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_update_without_apps_input_1.UserUpdateWithoutAppsInput)
], UserUpsertWithoutAppsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_apps_input_1.UserCreateWithoutAppsInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_create_without_apps_input_1.UserCreateWithoutAppsInput)
], UserUpsertWithoutAppsInput.prototype, "create", void 0);
UserUpsertWithoutAppsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUpsertWithoutAppsInput);
exports.UserUpsertWithoutAppsInput = UserUpsertWithoutAppsInput;
