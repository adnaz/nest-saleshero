"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickRepliesModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const quick_replies_service_1 = require("./quick-replies.service");
const quick_replies_resolver_1 = require("./quick-replies.resolver");
const users_service_1 = require("../users/users.service");
const prisma_service_1 = require("../prisma.service");
const quick_reply_values_service_1 = require("../quick-reply-values/quick-reply-values.service");
let QuickRepliesModule = class QuickRepliesModule {
};
QuickRepliesModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [quick_replies_resolver_1.QuickRepliesResolver, quick_replies_service_1.QuickRepliesService, users_service_1.UsersService, prisma_service_1.PrismaService, quick_reply_values_service_1.QuickReplyValuesService]
    })
], QuickRepliesModule);
exports.QuickRepliesModule = QuickRepliesModule;
