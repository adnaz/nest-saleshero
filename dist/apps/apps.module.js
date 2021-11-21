"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const apps_service_1 = require("./apps.service");
const apps_resolver_1 = require("./apps.resolver");
const prisma_service_1 = require("../prisma.service");
const user_service_1 = require("../user.service");
let AppsModule = class AppsModule {
};
AppsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [apps_resolver_1.AppsResolver, apps_service_1.AppsService, prisma_service_1.PrismaService, user_service_1.UserService]
    })
], AppsModule);
exports.AppsModule = AppsModule;
