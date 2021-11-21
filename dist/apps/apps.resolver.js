"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsResolver = void 0;
const tslib_1 = require("tslib");
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
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(returns => [app_model_1.App]),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [find_many_app_args_1.FindManyAppArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppsResolver.prototype, "apps", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(retuns => app_model_1.App),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppsResolver.prototype, "app", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(returns => app_model_1.App),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('appCreateInput')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [app_create_input_1.AppCreateInput]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppsResolver.prototype, "createApp", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => app_model_1.App),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [update_one_app_args_1.UpdateOneAppArgs]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppsResolver.prototype, "updateApp", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => app_model_1.App),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppsResolver.prototype, "removeApp", null);
AppsResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(app_model_1.App),
    (0, tslib_1.__metadata)("design:paramtypes", [apps_service_1.AppsService])
], AppsResolver);
exports.AppsResolver = AppsResolver;
