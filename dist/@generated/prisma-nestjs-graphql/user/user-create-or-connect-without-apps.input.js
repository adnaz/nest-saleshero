"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAppsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_create_without_apps_input_1 = require("./user-create-without-apps.input");
let UserCreateOrConnectWithoutAppsInput = class UserCreateOrConnectWithoutAppsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutAppsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_apps_input_1.UserCreateWithoutAppsInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_create_without_apps_input_1.UserCreateWithoutAppsInput)
], UserCreateOrConnectWithoutAppsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutAppsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserCreateOrConnectWithoutAppsInput);
exports.UserCreateOrConnectWithoutAppsInput = UserCreateOrConnectWithoutAppsInput;
