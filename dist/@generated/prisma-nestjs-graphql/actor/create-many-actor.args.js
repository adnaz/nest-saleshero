"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyActorArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const actor_create_many_input_1 = require("./actor-create-many.input");
let CreateManyActorArgs = class CreateManyActorArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [actor_create_many_input_1.ActorCreateManyInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyActorArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyActorArgs.prototype, "skipDuplicates", void 0);
CreateManyActorArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateManyActorArgs);
exports.CreateManyActorArgs = CreateManyActorArgs;
