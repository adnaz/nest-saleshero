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
exports.UsersResolver = void 0;
const client_1 = require(".prisma/client");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const course_model_1 = require("../@generated/prisma-nestjs-graphql/course/course.model");
const find_many_user_args_1 = require("../@generated/prisma-nestjs-graphql/user/find-many-user.args");
const update_one_user_args_1 = require("../@generated/prisma-nestjs-graphql/user/update-one-user.args");
const user_create_input_1 = require("../@generated/prisma-nestjs-graphql/user/user-create.input");
const user_model_1 = require("../@generated/prisma-nestjs-graphql/user/user.model");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const gql_auth_guard_1 = require("../auth/gql-auth.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const courses_service_1 = require("../courses/courses.service");
const users_service_1 = require("./users.service");
let UsersResolver = class UsersResolver {
    constructor(usersService, coursesService) {
        this.usersService = usersService;
        this.coursesService = coursesService;
    }
    whoAmI(user) {
        return this.usersService.findOne(user.username);
    }
    users(findManyUserArgs) {
        return this.usersService.users(findManyUserArgs);
    }
    async user(id) {
        return this.usersService.user({ id });
    }
    createUser(userCreateInput) {
        return this.usersService.createUser(userCreateInput);
    }
    updateUser(updateOneUserArgs) {
        return this.usersService.updateUser(updateOneUserArgs);
    }
    removeUser(id) {
        return this.usersService.deleteUser({ id });
    }
    async courses(user) {
        const { id } = user;
        return this.coursesService.courses({ where: { authorId: { equals: id } } });
    }
};
__decorate([
    (0, graphql_1.Query)(returns => user_model_1.User),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, roles_decorator_1.Authorize)(client_1.Role.ADMIN),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "whoAmI", null);
__decorate([
    (0, graphql_1.Query)(returns => [user_model_1.User]),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_user_args_1.FindManyUserArgs]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "users", null);
__decorate([
    (0, graphql_1.Query)(retuns => user_model_1.User),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "user", null);
__decorate([
    (0, graphql_1.Mutation)(returns => user_model_1.User),
    __param(0, (0, graphql_1.Args)('userCreateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_create_input_1.UserCreateInput]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.User),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_one_user_args_1.UpdateOneUserArgs]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.User),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "removeUser", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [course_model_1.Course]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "courses", null);
UsersResolver = __decorate([
    (0, graphql_1.Resolver)(user_model_1.User),
    __metadata("design:paramtypes", [users_service_1.UsersService, courses_service_1.CoursesService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map