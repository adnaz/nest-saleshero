"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsModule = void 0;
const common_1 = require("@nestjs/common");
const apps_service_1 = require("./apps.service");
const apps_resolver_1 = require("./apps.resolver");
const prisma_service_1 = require("../prisma.service");
const user_service_1 = require("../user.service");
let AppsModule = class AppsModule {
};
AppsModule = __decorate([
    (0, common_1.Module)({
        providers: [apps_resolver_1.AppsResolver, apps_service_1.AppsService, prisma_service_1.PrismaService, user_service_1.UserService]
    })
], AppsModule);
exports.AppsModule = AppsModule;
//# sourceMappingURL=apps.module.js.map