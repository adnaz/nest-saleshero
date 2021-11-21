"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorsResolver = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const actor_model_1 = require("../@generated/prisma-nestjs-graphql/actor/actor.model");
const find_many_actor_args_1 = require("../@generated/prisma-nestjs-graphql/actor/find-many-actor.args");
const users_service_1 = require("../users/users.service");
const actors_service_1 = require("./actors.service");
const courses_service_1 = require("../courses/courses.service");
const file_model_1 = require("../@generated/prisma-nestjs-graphql/file/file.model");
const files_service_1 = require("../files/files.service");
const actor_create_input_1 = require("../@generated/prisma-nestjs-graphql/actor/actor-create.input");
const update_one_actor_args_1 = require("../@generated/prisma-nestjs-graphql/actor/update-one-actor.args");
let ActorsResolver = class ActorsResolver {
    constructor(actorsService, filesService) {
        this.actorsService = actorsService;
        this.filesService = filesService;
    }
    actors(findManyActorArgs) {
        return this.actorsService.actors(findManyActorArgs);
    }
    async actor(id) {
        return this.actorsService.actor({ id });
    }
    createActor(actorCreateInput) {
        return this.actorsService.createActor(actorCreateInput);
    }
    updateActor(updateOneActorArgs) {
        return this.actorsService.updateActor(updateOneActorArgs);
    }
    removeActor(id) {
        return this.actorsService.deleteActor({ id });
    }
    async avatar(actor) {
        const { fileId } = actor;
        if (fileId) {
            return this.filesService.file({ id: fileId });
        }
        return null;
    }
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(returns => [actor_model_1.Actor]),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [find_many_actor_args_1.FindManyActorArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ActorsResolver.prototype, "actors", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Query)(retuns => actor_model_1.Actor),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ActorsResolver.prototype, "actor", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(returns => actor_model_1.Actor),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('actorCreateInput')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [actor_create_input_1.ActorCreateInput]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ActorsResolver.prototype, "createActor", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => actor_model_1.Actor),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [update_one_actor_args_1.UpdateOneActorArgs]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ActorsResolver.prototype, "updateActor", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.Mutation)(() => actor_model_1.Actor),
    (0, tslib_1.__param)(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ActorsResolver.prototype, "removeActor", null);
(0, tslib_1.__decorate)([
    (0, graphql_1.ResolveField)(() => file_model_1.File),
    (0, tslib_1.__param)(0, (0, graphql_1.Parent)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [actor_model_1.Actor]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ActorsResolver.prototype, "avatar", null);
ActorsResolver = (0, tslib_1.__decorate)([
    (0, graphql_1.Resolver)(actor_model_1.Actor),
    (0, tslib_1.__metadata)("design:paramtypes", [actors_service_1.ActorsService, files_service_1.FilesService])
], ActorsResolver);
exports.ActorsResolver = ActorsResolver;
