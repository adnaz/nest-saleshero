"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutAppsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_apps_input_1 = require("./user-create-without-apps.input");
const user_create_or_connect_without_apps_input_1 = require("./user-create-or-connect-without-apps.input");
const user_upsert_without_apps_input_1 = require("./user-upsert-without-apps.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_without_apps_input_1 = require("./user-update-without-apps.input");
let UserUpdateOneWithoutAppsInput = class UserUpdateOneWithoutAppsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_apps_input_1.UserCreateWithoutAppsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_without_apps_input_1.UserCreateWithoutAppsInput)
], UserUpdateOneWithoutAppsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_or_connect_without_apps_input_1.UserCreateOrConnectWithoutAppsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_or_connect_without_apps_input_1.UserCreateOrConnectWithoutAppsInput)
], UserUpdateOneWithoutAppsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_upsert_without_apps_input_1.UserUpsertWithoutAppsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_upsert_without_apps_input_1.UserUpsertWithoutAppsInput)
], UserUpdateOneWithoutAppsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutAppsInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutAppsInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserUpdateOneWithoutAppsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_without_apps_input_1.UserUpdateWithoutAppsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_update_without_apps_input_1.UserUpdateWithoutAppsInput)
], UserUpdateOneWithoutAppsInput.prototype, "update", void 0);
UserUpdateOneWithoutAppsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUpdateOneWithoutAppsInput);
exports.UserUpdateOneWithoutAppsInput = UserUpdateOneWithoutAppsInput;
