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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateOneWithoutActorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_without_actor_input_1 = require("./file-create-without-actor.input");
const file_create_or_connect_without_actor_input_1 = require("./file-create-or-connect-without-actor.input");
const file_upsert_without_actor_input_1 = require("./file-upsert-without-actor.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
const file_update_without_actor_input_1 = require("./file-update-without-actor.input");
let FileUpdateOneWithoutActorInput = class FileUpdateOneWithoutActorInput {
};
__decorate([
    (0, graphql_1.Field)(() => file_create_without_actor_input_1.FileCreateWithoutActorInput, { nullable: true }),
    __metadata("design:type", file_create_without_actor_input_1.FileCreateWithoutActorInput)
], FileUpdateOneWithoutActorInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_create_or_connect_without_actor_input_1.FileCreateOrConnectWithoutActorInput, { nullable: true }),
    __metadata("design:type", file_create_or_connect_without_actor_input_1.FileCreateOrConnectWithoutActorInput)
], FileUpdateOneWithoutActorInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_upsert_without_actor_input_1.FileUpsertWithoutActorInput, { nullable: true }),
    __metadata("design:type", file_upsert_without_actor_input_1.FileUpsertWithoutActorInput)
], FileUpdateOneWithoutActorInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], FileUpdateOneWithoutActorInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], FileUpdateOneWithoutActorInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    __metadata("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FileUpdateOneWithoutActorInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_update_without_actor_input_1.FileUpdateWithoutActorInput, { nullable: true }),
    __metadata("design:type", file_update_without_actor_input_1.FileUpdateWithoutActorInput)
], FileUpdateOneWithoutActorInput.prototype, "update", void 0);
FileUpdateOneWithoutActorInput = __decorate([
    (0, graphql_2.InputType)()
], FileUpdateOneWithoutActorInput);
exports.FileUpdateOneWithoutActorInput = FileUpdateOneWithoutActorInput;
//# sourceMappingURL=file-update-one-without-actor.input.js.map