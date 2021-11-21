"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const posts_resolver_1 = require("./posts.resolver");
const users_service_1 = require("../users/users.service");
const prisma_service_1 = require("../prisma.service");
let PostsModule = class PostsModule {
};
PostsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [posts_resolver_1.PostsResolver, posts_service_1.PostsService, users_service_1.UsersService, prisma_service_1.PrismaService]
    })
], PostsModule);
exports.PostsModule = PostsModule;
