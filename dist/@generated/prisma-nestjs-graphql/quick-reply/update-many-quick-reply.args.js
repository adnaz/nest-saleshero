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
exports.UpdateManyQuickReplyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const quick_reply_update_many_mutation_input_1 = require("./quick-reply-update-many-mutation.input");
const quick_reply_where_input_1 = require("./quick-reply-where.input");
let UpdateManyQuickReplyArgs = class UpdateManyQuickReplyArgs {
};
__decorate([
    (0, graphql_1.Field)(() => quick_reply_update_many_mutation_input_1.QuickReplyUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", quick_reply_update_many_mutation_input_1.QuickReplyUpdateManyMutationInput)
], UpdateManyQuickReplyArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_where_input_1.QuickReplyWhereInput, { nullable: true }),
    __metadata("design:type", quick_reply_where_input_1.QuickReplyWhereInput)
], UpdateManyQuickReplyArgs.prototype, "where", void 0);
UpdateManyQuickReplyArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyQuickReplyArgs);
exports.UpdateManyQuickReplyArgs = UpdateManyQuickReplyArgs;
//# sourceMappingURL=update-many-quick-reply.args.js.map