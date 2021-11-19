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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const app_create_input_1 = require("../@generated/prisma-nestjs-graphql/app/app-create.input");
const app_model_1 = require("../@generated/prisma-nestjs-graphql/app/app.model");
const find_many_app_args_1 = require("../@generated/prisma-nestjs-graphql/app/find-many-app.args");
const update_one_app_args_1 = require("../@generated/prisma-nestjs-graphql/app/update-one-app.args");
const users_service_1 = require("../users/users.service");
const apps_service_1 = require("./apps.service");
const courses_service_1 = require("../courses/courses.service");
let AppsResolver = class AppsResolver {
    constructor(appsService) {
        this.appsService = appsService;
    }
    apps(findManyAppArgs) {
        return this.appsService.apps(findManyAppArgs);
    }
    async app(id) {
        return this.appsService.app({ id });
    }
    createApp(appCreateInput) {
        return this.appsService.createApp(appCreateInput);
    }
    updateApp(updateOneAppArgs) {
        return this.appsService.updateApp(updateOneAppArgs);
    }
    removeApp(id) {
        return this.appsService.deleteApp({ id });
    }
};
__decorate([
    (0, graphql_1.Query)(returns => [app_model_1.App]),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_app_args_1.FindManyAppArgs]),
    __metadata("design:returntype", Promise)
], AppsResolver.prototype, "apps", null);
__decorate([
    (0, graphql_1.Query)(retuns => app_model_1.App),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppsResolver.prototype, "app", null);
__decorate([
    (0, graphql_1.Mutation)(returns => app_model_1.App),
    __param(0, (0, graphql_1.Args)('appCreateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_create_input_1.AppCreateInput]),
    __metadata("design:returntype", void 0)
], AppsResolver.prototype, "createApp", null);
__decorate([
    (0, graphql_1.Mutation)(() => app_model_1.App),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_one_app_args_1.UpdateOneAppArgs]),
    __metadata("design:returntype", void 0)
], AppsResolver.prototype, "updateApp", null);
__decorate([
    (0, graphql_1.Mutation)(() => app_model_1.App),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppsResolver.prototype, "removeApp", null);
AppsResolver = __decorate([
    (0, graphql_1.Resolver)(app_model_1.App),
    __metadata("design:paramtypes", [apps_service_1.AppsService])
], AppsResolver);
exports.AppsResolver = AppsResolver;
//# sourceMappingURL=apps.resolver.js.map