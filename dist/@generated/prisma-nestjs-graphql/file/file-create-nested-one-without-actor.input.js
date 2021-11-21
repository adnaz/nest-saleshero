"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateNestedOneWithoutActorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_without_actor_input_1 = require("./file-create-without-actor.input");
const file_create_or_connect_without_actor_input_1 = require("./file-create-or-connect-without-actor.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
let FileCreateNestedOneWithoutActorInput = class FileCreateNestedOneWithoutActorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_actor_input_1.FileCreateWithoutActorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_without_actor_input_1.FileCreateWithoutActorInput)
], FileCreateNestedOneWithoutActorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_or_connect_without_actor_input_1.FileCreateOrConnectWithoutActorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_or_connect_without_actor_input_1.FileCreateOrConnectWithoutActorInput)
], FileCreateNestedOneWithoutActorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileCreateNestedOneWithoutActorInput.prototype, "connect", void 0);
FileCreateNestedOneWithoutActorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileCreateNestedOneWithoutActorInput);
exports.FileCreateNestedOneWithoutActorInput = FileCreateNestedOneWithoutActorInput;
