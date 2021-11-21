"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateOneWithoutActorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_without_actor_input_1 = require("./file-create-without-actor.input");
const file_create_or_connect_without_actor_input_1 = require("./file-create-or-connect-without-actor.input");
const file_upsert_without_actor_input_1 = require("./file-upsert-without-actor.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
const file_update_without_actor_input_1 = require("./file-update-without-actor.input");
let FileUpdateOneWithoutActorInput = class FileUpdateOneWithoutActorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_without_actor_input_1.FileCreateWithoutActorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_without_actor_input_1.FileCreateWithoutActorInput)
], FileUpdateOneWithoutActorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_or_connect_without_actor_input_1.FileCreateOrConnectWithoutActorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_or_connect_without_actor_input_1.FileCreateOrConnectWithoutActorInput)
], FileUpdateOneWithoutActorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_upsert_without_actor_input_1.FileUpsertWithoutActorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_upsert_without_actor_input_1.FileUpsertWithoutActorInput)
], FileUpdateOneWithoutActorInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], FileUpdateOneWithoutActorInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], FileUpdateOneWithoutActorInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileUpdateOneWithoutActorInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_without_actor_input_1.FileUpdateWithoutActorInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_update_without_actor_input_1.FileUpdateWithoutActorInput)
], FileUpdateOneWithoutActorInput.prototype, "update", void 0);
FileUpdateOneWithoutActorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], FileUpdateOneWithoutActorInput);
exports.FileUpdateOneWithoutActorInput = FileUpdateOneWithoutActorInput;
