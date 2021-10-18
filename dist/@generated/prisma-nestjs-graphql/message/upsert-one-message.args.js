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
exports.UpsertOneMessageArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const message_where_unique_input_1 = require("./message-where-unique.input");
const message_create_input_1 = require("./message-create.input");
const message_update_input_1 = require("./message-update.input");
let UpsertOneMessageArgs = class UpsertOneMessageArgs {
};
__decorate([
    (0, graphql_1.Field)(() => message_where_unique_input_1.MessageWhereUniqueInput, { nullable: false }),
    __metadata("design:type", message_where_unique_input_1.MessageWhereUniqueInput)
], UpsertOneMessageArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_create_input_1.MessageCreateInput, { nullable: false }),
    __metadata("design:type", message_create_input_1.MessageCreateInput)
], UpsertOneMessageArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_update_input_1.MessageUpdateInput, { nullable: false }),
    __metadata("design:type", message_update_input_1.MessageUpdateInput)
], UpsertOneMessageArgs.prototype, "update", void 0);
UpsertOneMessageArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneMessageArgs);
exports.UpsertOneMessageArgs = UpsertOneMessageArgs;
//# sourceMappingURL=upsert-one-message.args.js.map