"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAppsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_apps_input_1 = require("./user-create-without-apps.input");
const user_create_or_connect_without_apps_input_1 = require("./user-create-or-connect-without-apps.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
let UserCreateNestedOneWithoutAppsInput = class UserCreateNestedOneWithoutAppsInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_create_without_apps_input_1.UserCreateWithoutAppsInput, { nullable: true }),
    __metadata("design:type", user_create_without_apps_input_1.UserCreateWithoutAppsInput)
], UserCreateNestedOneWithoutAppsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_apps_input_1.UserCreateOrConnectWithoutAppsInput, { nullable: true }),
    __metadata("design:type", user_create_or_connect_without_apps_input_1.UserCreateOrConnectWithoutAppsInput)
], UserCreateNestedOneWithoutAppsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    __metadata("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutAppsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutAppsInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateNestedOneWithoutAppsInput);
exports.UserCreateNestedOneWithoutAppsInput = UserCreateNestedOneWithoutAppsInput;
//# sourceMappingURL=user-create-nested-one-without-apps.input.js.map