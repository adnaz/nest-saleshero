"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpsertWithoutActorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_update_without_actor_input_1 = require("./file-update-without-actor.input");
const file_create_without_actor_input_1 = require("./file-create-without-actor.input");
let FileUpsertWithoutActorInput = class FileUpsertWithoutActorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_without_actor_input_1.FileUpdateWithoutActorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_update_without_actor_input_1.FileUpdateWithoutActorInput)
], FileUpsertWithoutActorInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_actor_input_1.FileCreateWithoutActorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_create_without_actor_input_1.FileCreateWithoutActorInput)
], FileUpsertWithoutActorInput.prototype, "create", void 0);
FileUpsertWithoutActorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpsertWithoutActorInput);
exports.FileUpsertWithoutActorInput = FileUpsertWithoutActorInput;
