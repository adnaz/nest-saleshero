"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValuesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const quick_reply_values_service_1 = require("./quick-reply-values.service");
const quick_reply_values_resolver_1 = require("./quick-reply-values.resolver");
const users_service_1 = require("../users/users.service");
const prisma_service_1 = require("../prisma.service");
let QuickReplyValuesModule = class QuickReplyValuesModule {
};
QuickReplyValuesModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [quick_reply_values_resolver_1.QuickReplyValuesResolver, quick_reply_values_service_1.QuickReplyValuesService, users_service_1.UsersService, prisma_service_1.PrismaService]
    })
], QuickReplyValuesModule);
exports.QuickReplyValuesModule = QuickReplyValuesModule;
