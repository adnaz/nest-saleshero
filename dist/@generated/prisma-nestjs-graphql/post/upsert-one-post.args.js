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
exports.UpsertOnePostArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_unique_input_1 = require("./post-where-unique.input");
const post_create_input_1 = require("./post-create.input");
const post_update_input_1 = require("./post-update.input");
let UpsertOnePostArgs = class UpsertOnePostArgs {
};
__decorate([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: false }),
    __metadata("design:type", post_where_unique_input_1.PostWhereUniqueInput)
], UpsertOnePostArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_create_input_1.PostCreateInput, { nullable: false }),
    __metadata("design:type", post_create_input_1.PostCreateInput)
], UpsertOnePostArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_update_input_1.PostUpdateInput, { nullable: false }),
    __metadata("design:type", post_update_input_1.PostUpdateInput)
], UpsertOnePostArgs.prototype, "update", void 0);
UpsertOnePostArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOnePostArgs);
exports.UpsertOnePostArgs = UpsertOnePostArgs;
//# sourceMappingURL=upsert-one-post.args.js.map