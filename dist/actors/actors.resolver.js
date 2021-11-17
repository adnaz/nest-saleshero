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
exports.ActorsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const actor_model_1 = require("../@generated/prisma-nestjs-graphql/actor/actor.model");
const actors_service_1 = require("./actors.service");
const create_actor_input_1 = require("./dto/create-actor.input");
const update_actor_input_1 = require("./dto/update-actor.input");
let ActorsResolver = class ActorsResolver {
    constructor(actorsService) {
        this.actorsService = actorsService;
    }
    createActor(createActorInput) {
        return this.actorsService.create(createActorInput);
    }
    findAll() {
        return this.actorsService.findAll();
    }
    findOne(id) {
        return this.actorsService.findOne(id);
    }
    updateActor(updateActorInput) {
        return this.actorsService.update(updateActorInput.id, updateActorInput);
    }
    removeActor(id) {
        return this.actorsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => actor_model_1.Actor),
    __param(0, (0, graphql_1.Args)('createActorInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_actor_input_1.CreateActorInput]),
    __metadata("design:returntype", void 0)
], ActorsResolver.prototype, "createActor", null);
__decorate([
    (0, graphql_1.Query)(() => [actor_model_1.Actor], { name: 'actors' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActorsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => actor_model_1.Actor, { name: 'actor' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActorsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => actor_model_1.Actor),
    __param(0, (0, graphql_1.Args)('updateActorInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_actor_input_1.UpdateActorInput]),
    __metadata("design:returntype", void 0)
], ActorsResolver.prototype, "updateActor", null);
__decorate([
    (0, graphql_1.Mutation)(() => actor_model_1.Actor),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActorsResolver.prototype, "removeActor", null);
ActorsResolver = __decorate([
    (0, graphql_1.Resolver)(() => actor_model_1.Actor),
    __metadata("design:paramtypes", [actors_service_1.ActorsService])
], ActorsResolver);
exports.ActorsResolver = ActorsResolver;
//# sourceMappingURL=actors.resolver.js.map