"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
// import { Post } from './post.entity';
const prisma_service_1 = require("../prisma.service");
const find_many_post_args_1 = require("../@generated/prisma-nestjs-graphql/post/find-many-post.args");
let PostsService = class PostsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async post(postWhereUniqueInput) {
        return this.prisma.post.findUnique({
            where: postWhereUniqueInput,
        });
    }
    async posts(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.post.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createPost(data) {
        return this.prisma.post.create({
            data,
        });
    }
    async updatePost(params) {
        const { data, where } = params;
        return this.prisma.post.update({
            data,
            where,
        });
    }
    async deletePost(where) {
        return this.prisma.post.delete({
            where,
        });
    }
};
PostsService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [prisma_service_1.PrismaService])
], PostsService);
exports.PostsService = PostsService;
