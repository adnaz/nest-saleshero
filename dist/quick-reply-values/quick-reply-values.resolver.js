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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValuesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const find_many_quick_reply_value_args_1 = require("../@generated/prisma-nestjs-graphql/quick-reply-value/find-many-quick-reply-value.args");
const quick_reply_value_create_input_1 = require("../@generated/prisma-nestjs-graphql/quick-reply-value/quick-reply-value-create.input");
const quick_reply_value_model_1 = require("../@generated/prisma-nestjs-graphql/quick-reply-value/quick-reply-value.model");
const update_one_quick_reply_value_args_1 = require("../@generated/prisma-nestjs-graphql/quick-reply-value/update-one-quick-reply-value.args");
const users_service_1 = require("../users/users.service");
const quick_reply_values_service_1 = require("./quick-reply-values.service");
let QuickReplyValuesResolver = class QuickReplyValuesResolver {
    constructor(quickReplyValuesService, usersService) {
        this.quickReplyValuesService = quickReplyValuesService;
        this.usersService = usersService;
    }
    quickReplyValues(findManyQuickReplyValueArgs) {
        return this.quickReplyValuesService.quickReplyValues(findManyQuickReplyValueArgs);
    }
    async quickReplyValue(id) {
        return this.quickReplyValuesService.quickReplyValue({ id });
    }
    createQuickReplyValue(quickReplyValueCreateInput) {
        return this.quickReplyValuesService.createQuickReplyValue(quickReplyValueCreateInput);
    }
    updateQuickReplyValue(updateOneQuickReplyValueArgs) {
        return this.quickReplyValuesService.updateQuickReplyValue(updateOneQuickReplyValueArgs);
    }
    removeQuickReplyValue(id) {
        return this.quickReplyValuesService.deleteQuickReplyValue({ id });
    }
};
__decorate([
    (0, graphql_1.Query)(returns => [quick_reply_value_model_1.QuickReplyValue]),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_quick_reply_value_args_1.FindManyQuickReplyValueArgs]),
    __metadata("design:returntype", Promise)
], QuickReplyValuesResolver.prototype, "quickReplyValues", null);
__decorate([
    (0, graphql_1.Query)(retuns => quick_reply_value_model_1.QuickReplyValue),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuickReplyValuesResolver.prototype, "quickReplyValue", null);
__decorate([
    (0, graphql_1.Mutation)(returns => quick_reply_value_model_1.QuickReplyValue),
    __param(0, (0, graphql_1.Args)('quickReplyValueCreateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [quick_reply_value_create_input_1.QuickReplyValueCreateInput]),
    __metadata("design:returntype", void 0)
], QuickReplyValuesResolver.prototype, "createQuickReplyValue", null);
__decorate([
    (0, graphql_1.Mutation)(() => quick_reply_value_model_1.QuickReplyValue),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_one_quick_reply_value_args_1.UpdateOneQuickReplyValueArgs]),
    __metadata("design:returntype", void 0)
], QuickReplyValuesResolver.prototype, "updateQuickReplyValue", null);
__decorate([
    (0, graphql_1.Mutation)(() => quick_reply_value_model_1.QuickReplyValue),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QuickReplyValuesResolver.prototype, "removeQuickReplyValue", null);
QuickReplyValuesResolver = __decorate([
    (0, graphql_1.Resolver)(quick_reply_value_model_1.QuickReplyValue),
    __metadata("design:paramtypes", [quick_reply_values_service_1.QuickReplyValuesService, users_service_1.UsersService])
], QuickReplyValuesResolver);
exports.QuickReplyValuesResolver = QuickReplyValuesResolver;
//# sourceMappingURL=quick-reply-values.resolver.js.map