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
exports.UpsertOneFileArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_where_unique_input_1 = require("./file-where-unique.input");
const file_create_input_1 = require("./file-create.input");
const file_update_input_1 = require("./file-update.input");
let UpsertOneFileArgs = class UpsertOneFileArgs {
};
__decorate([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: false }),
    __metadata("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], UpsertOneFileArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_create_input_1.FileCreateInput, { nullable: false }),
    __metadata("design:type", file_create_input_1.FileCreateInput)
], UpsertOneFileArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_update_input_1.FileUpdateInput, { nullable: false }),
    __metadata("design:type", file_update_input_1.FileUpdateInput)
], UpsertOneFileArgs.prototype, "update", void 0);
UpsertOneFileArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneFileArgs);
exports.UpsertOneFileArgs = UpsertOneFileArgs;
//# sourceMappingURL=upsert-one-file.args.js.map