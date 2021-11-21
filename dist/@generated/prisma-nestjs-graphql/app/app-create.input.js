"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCreateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_nested_one_without_apps_input_1 = require("../user/user-create-nested-one-without-apps.input");
let AppCreateInput = class AppCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], AppCreateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AppCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_nested_one_without_apps_input_1.UserCreateNestedOneWithoutAppsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_nested_one_without_apps_input_1.UserCreateNestedOneWithoutAppsInput)
], AppCreateInput.prototype, "author", void 0);
AppCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppCreateInput);
exports.AppCreateInput = AppCreateInput;
