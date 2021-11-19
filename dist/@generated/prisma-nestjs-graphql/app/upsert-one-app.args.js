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
exports.UpsertOneAppArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_where_unique_input_1 = require("./app-where-unique.input");
const app_create_input_1 = require("./app-create.input");
const app_update_input_1 = require("./app-update.input");
let UpsertOneAppArgs = class UpsertOneAppArgs {
};
__decorate([
    (0, graphql_1.Field)(() => app_where_unique_input_1.AppWhereUniqueInput, { nullable: false }),
    __metadata("design:type", app_where_unique_input_1.AppWhereUniqueInput)
], UpsertOneAppArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_create_input_1.AppCreateInput, { nullable: false }),
    __metadata("design:type", app_create_input_1.AppCreateInput)
], UpsertOneAppArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_update_input_1.AppUpdateInput, { nullable: false }),
    __metadata("design:type", app_update_input_1.AppUpdateInput)
], UpsertOneAppArgs.prototype, "update", void 0);
UpsertOneAppArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneAppArgs);
exports.UpsertOneAppArgs = UpsertOneAppArgs;
//# sourceMappingURL=upsert-one-app.args.js.map