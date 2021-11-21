"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorCreateWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_nested_one_without_actor_input_1 = require("../file/file-create-nested-one-without-actor.input");
let ActorCreateWithoutRepliesInput = class ActorCreateWithoutRepliesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ActorCreateWithoutRepliesInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorCreateWithoutRepliesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorCreateWithoutRepliesInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_nested_one_without_actor_input_1.FileCreateNestedOneWithoutActorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_nested_one_without_actor_input_1.FileCreateNestedOneWithoutActorInput)
], ActorCreateWithoutRepliesInput.prototype, "avatar", void 0);
ActorCreateWithoutRepliesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorCreateWithoutRepliesInput);
exports.ActorCreateWithoutRepliesInput = ActorCreateWithoutRepliesInput;
