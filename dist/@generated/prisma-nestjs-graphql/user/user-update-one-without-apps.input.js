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
exports.UserUpdateOneWithoutAppsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_apps_input_1 = require("./user-create-without-apps.input");
const user_create_or_connect_without_apps_input_1 = require("./user-create-or-connect-without-apps.input");
const user_upsert_without_apps_input_1 = require("./user-upsert-without-apps.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_without_apps_input_1 = require("./user-update-without-apps.input");
let UserUpdateOneWithoutAppsInput = class UserUpdateOneWithoutAppsInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_create_without_apps_input_1.UserCreateWithoutAppsInput, { nullable: true }),
    __metadata("design:type", user_create_without_apps_input_1.UserCreateWithoutAppsInput)
], UserUpdateOneWithoutAppsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_apps_input_1.UserCreateOrConnectWithoutAppsInput, { nullable: true }),
    __metadata("design:type", user_create_or_connect_without_apps_input_1.UserCreateOrConnectWithoutAppsInput)
], UserUpdateOneWithoutAppsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_upsert_without_apps_input_1.UserUpsertWithoutAppsInput, { nullable: true }),
    __metadata("design:type", user_upsert_without_apps_input_1.UserUpsertWithoutAppsInput)
], UserUpdateOneWithoutAppsInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutAppsInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutAppsInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    __metadata("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserUpdateOneWithoutAppsInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_without_apps_input_1.UserUpdateWithoutAppsInput, { nullable: true }),
    __metadata("design:type", user_update_without_apps_input_1.UserUpdateWithoutAppsInput)
], UserUpdateOneWithoutAppsInput.prototype, "update", void 0);
UserUpdateOneWithoutAppsInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateOneWithoutAppsInput);
exports.UserUpdateOneWithoutAppsInput = UserUpdateOneWithoutAppsInput;
//# sourceMappingURL=user-update-one-without-apps.input.js.map