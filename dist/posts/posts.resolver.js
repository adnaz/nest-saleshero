"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsResolver = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const post_create_input_1 = require("../@generated/prisma-nestjs-graphql/post/post-create.input");
const post_model_1 = require("../@generated/prisma-nestjs-graphql/post/post.model");
const find_many_post_args_1 = require("../@generated/prisma-nestjs-graphql/post/find-many-post.args");
const update_one_post_args_1 = require("../@generated/prisma-nestjs-graphql/post/update-one-post.args");
const users_service_1 = require("../users/users.service");
const posts_service_1 = require("./posts.service");
let PostsResolver = class PostsResolver {
    constructor(postsService, usersService) {
        this.postsService = postsService;
        this.usersService = usersService;
    }
    posts(findManyPostArgs) {
        return this.postsService.posts(findManyPostArgs);
    }
    async post(id) {
        return this.postsService.post({ id });
    }
    createPost(postCreateInput) {
        return this.postsService.createPost(postCreateInput);
    }
    updatePost(updateOnePostArgs) {
        return this.postsService.updatePost(updateOnePostArgs);
    }
    removePost(id) {
        return this.postsService.deletePost({ id });
    }
    async author(post) {
        const { authorId } = post;
        if (authorId) {
            return this.usersService.user({ id: authorId });
        }
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(returns => [post_model_1.Post]),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [find_many_post_args_1.FindManyPostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsResolver.prototype, "posts", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(retuns => post_model_1.Post),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsResolver.prototype, "post", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(returns => post_model_1.Post),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('postCreateInput')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [post_create_input_1.PostCreateInput]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PostsResolver.prototype, "createPost", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => post_model_1.Post),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [update_one_post_args_1.UpdateOnePostArgs]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PostsResolver.prototype, "updatePost", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => post_model_1.Post),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], PostsResolver.prototype, "removePost", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(),
    (0, tslib_1.__param)(0, (0, graphql_1.Parent)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [post_model_1.Post]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostsResolver.prototype, "author", null);
PostsResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(post_model_1.Post),
    (0, tslib_1.__metadata)("design:paramtypes", [posts_service_1.PostsService, users_service_1.UsersService])
], PostsResolver);
exports.PostsResolver = PostsResolver;
