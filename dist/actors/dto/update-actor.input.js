"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateActorInput = void 0;
const tslib_1 = require("tslib");
const create_actor_input_1 = require("./create-actor.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateActorInput = class UpdateActorInput extends (0, graphql_1.PartialType)(create_actor_input_1.CreateActorInput) {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, tslib_1.__metadata)("design:type", Number)
], UpdateActorInput.prototype, "id", void 0);
UpdateActorInput = (0, tslib_1.__decorate)([
    (0, graphql_1.InputType)()
], UpdateActorInput);
exports.UpdateActorInput = UpdateActorInput;
