"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValuesModule = void 0;
const common_1 = require("@nestjs/common");
const quick_reply_values_service_1 = require("./quick-reply-values.service");
const quick_reply_values_resolver_1 = require("./quick-reply-values.resolver");
const users_service_1 = require("../users/users.service");
const prisma_service_1 = require("../prisma.service");
let QuickReplyValuesModule = class QuickReplyValuesModule {
};
QuickReplyValuesModule = __decorate([
    (0, common_1.Module)({
        providers: [quick_reply_values_resolver_1.QuickReplyValuesResolver, quick_reply_values_service_1.QuickReplyValuesService, users_service_1.UsersService, prisma_service_1.PrismaService]
    })
], QuickReplyValuesModule);
exports.QuickReplyValuesModule = QuickReplyValuesModule;
//# sourceMappingURL=quick-reply-values.module.js.map