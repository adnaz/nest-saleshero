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
exports.PostsResolver = void 0;
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
        const { id } = post;
        return this.usersService.user({ id });
    }
};
__decorate([
    (0, graphql_1.Query)(returns => [post_model_1.Post]),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_post_args_1.FindManyPostArgs]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "posts", null);
__decorate([
    (0, graphql_1.Query)(retuns => post_model_1.Post),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "post", null);
__decorate([
    (0, graphql_1.Mutation)(returns => post_model_1.Post),
    __param(0, (0, graphql_1.Args)('postCreateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_create_input_1.PostCreateInput]),
    __metadata("design:returntype", void 0)
], PostsResolver.prototype, "createPost", null);
__decorate([
    (0, graphql_1.Mutation)(() => post_model_1.Post),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_one_post_args_1.UpdateOnePostArgs]),
    __metadata("design:returntype", void 0)
], PostsResolver.prototype, "updatePost", null);
__decorate([
    (0, graphql_1.Mutation)(() => post_model_1.Post),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostsResolver.prototype, "removePost", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_model_1.Post]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "author", null);
PostsResolver = __decorate([
    (0, graphql_1.Resolver)(post_model_1.Post),
    __metadata("design:paramtypes", [posts_service_1.PostsService, users_service_1.UsersService])
], PostsResolver);
exports.PostsResolver = PostsResolver;
//# sourceMappingURL=posts.resolver.js.map