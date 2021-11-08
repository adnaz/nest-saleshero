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
exports.UpsertOneQuickReplyValueArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_value_where_unique_input_1 = require("./quick-reply-value-where-unique.input");
const quick_reply_value_create_input_1 = require("./quick-reply-value-create.input");
const quick_reply_value_update_input_1 = require("./quick-reply-value-update.input");
let UpsertOneQuickReplyValueArgs = class UpsertOneQuickReplyValueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput, { nullable: false }),
    __metadata("design:type", quick_reply_value_where_unique_input_1.QuickReplyValueWhereUniqueInput)
], UpsertOneQuickReplyValueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_create_input_1.QuickReplyValueCreateInput, { nullable: false }),
    __metadata("design:type", quick_reply_value_create_input_1.QuickReplyValueCreateInput)
], UpsertOneQuickReplyValueArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_update_input_1.QuickReplyValueUpdateInput, { nullable: false }),
    __metadata("design:type", quick_reply_value_update_input_1.QuickReplyValueUpdateInput)
], UpsertOneQuickReplyValueArgs.prototype, "update", void 0);
UpsertOneQuickReplyValueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneQuickReplyValueArgs);
exports.UpsertOneQuickReplyValueArgs = UpsertOneQuickReplyValueArgs;
//# sourceMappingURL=upsert-one-quick-reply-value.args.js.map