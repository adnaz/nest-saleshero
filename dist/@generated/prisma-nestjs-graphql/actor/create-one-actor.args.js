"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneActorArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_create_input_1 = require("./actor-create.input");
let CreateOneActorArgs = class CreateOneActorArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_create_input_1.ActorCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", actor_create_input_1.ActorCreateInput)
], CreateOneActorArgs.prototype, "data", void 0);
CreateOneActorArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateOneActorArgs);
exports.CreateOneActorArgs = CreateOneActorArgs;
