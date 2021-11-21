"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResolver = void 0;
const tslib_1 = require("tslib");
const client_1 = require(".prisma/client");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const course_model_1 = require("../@generated/prisma-nestjs-graphql/course/course.model");
const user_create_input_1 = require("../@generated/prisma-nestjs-graphql/user/user-create.input");
const user_model_1 = require("../@generated/prisma-nestjs-graphql/user/user.model");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const gql_auth_guard_1 = require("../auth/gql-auth.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const courses_service_1 = require("../courses/courses.service");
const users_service_1 = require("./users.service");
const find_many_user_args_1 = require("../@generated/prisma-nestjs-graphql/user/find-many-user.args");
const update_one_user_args_1 = require("../@generated/prisma-nestjs-graphql/user/update-one-user.args");
let UsersResolver = class UsersResolver {
    constructor(usersService, coursesService) {
        this.usersService = usersService;
        this.coursesService = coursesService;
    }
    // @Roles(Role.USER,Role.ADMIN)
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
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(returns => user_model_1.User),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, roles_decorator_1.Authorize)(client_1.Role.ADMIN),
    (0, tslib_1.__param)(0, (0, current_user_decorator_1.CurrentUser)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [user_model_1.User]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UsersResolver.prototype, "whoAmI", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(returns => [user_model_1.User]),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [find_many_user_args_1.FindManyUserArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersResolver.prototype, "users", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(retuns => user_model_1.User),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersResolver.prototype, "user", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(returns => user_model_1.User),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('userCreateInput')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [user_create_input_1.UserCreateInput]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UsersResolver.prototype, "createUser", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => user_model_1.User),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [update_one_user_args_1.UpdateOneUserArgs]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UsersResolver.prototype, "updateUser", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => user_model_1.User),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UsersResolver.prototype, "removeUser", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => [course_model_1.Course]),
    (0, tslib_1.__param)(0, (0, graphql_1.Parent)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [user_model_1.User]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsersResolver.prototype, "courses", null);
UsersResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(user_model_1.User),
    (0, tslib_1.__metadata)("design:paramtypes", [users_service_1.UsersService, courses_service_1.CoursesService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
