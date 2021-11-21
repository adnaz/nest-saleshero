"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateOrConnectWithoutActorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_where_unique_input_1 = require("./file-where-unique.input");
const file_create_without_actor_input_1 = require("./file-create-without-actor.input");
let FileCreateOrConnectWithoutActorInput = class FileCreateOrConnectWithoutActorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileCreateOrConnectWithoutActorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_actor_input_1.FileCreateWithoutActorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_create_without_actor_input_1.FileCreateWithoutActorInput)
], FileCreateOrConnectWithoutActorInput.prototype, "create", void 0);
FileCreateOrConnectWithoutActorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileCreateOrConnectWithoutActorInput);
exports.FileCreateOrConnectWithoutActorInput = FileCreateOrConnectWithoutActorInput;
