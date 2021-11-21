"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAppsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_apps_input_1 = require("./user-create-without-apps.input");
const user_create_or_connect_without_apps_input_1 = require("./user-create-or-connect-without-apps.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
let UserCreateNestedOneWithoutAppsInput = class UserCreateNestedOneWithoutAppsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_apps_input_1.UserCreateWithoutAppsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_without_apps_input_1.UserCreateWithoutAppsInput)
], UserCreateNestedOneWithoutAppsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_or_connect_without_apps_input_1.UserCreateOrConnectWithoutAppsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_or_connect_without_apps_input_1.UserCreateOrConnectWithoutAppsInput)
], UserCreateNestedOneWithoutAppsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutAppsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutAppsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserCreateNestedOneWithoutAppsInput);
exports.UserCreateNestedOneWithoutAppsInput = UserCreateNestedOneWithoutAppsInput;
