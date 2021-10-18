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
var ActorWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const reply_list_relation_filter_input_1 = require("../reply/reply-list-relation-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let ActorWhereInput = ActorWhereInput_1 = class ActorWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ActorWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ActorWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ActorWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ActorWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ActorWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ActorWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ActorWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], ActorWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], ActorWhereInput.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_list_relation_filter_input_1.ReplyListRelationFilter, { nullable: true }),
    __metadata("design:type", reply_list_relation_filter_input_1.ReplyListRelationFilter)
], ActorWhereInput.prototype, "replies", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ActorWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ActorWhereInput.prototype, "updatedAt", void 0);
ActorWhereInput = ActorWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ActorWhereInput);
exports.ActorWhereInput = ActorWhereInput;
//# sourceMappingURL=actor-where.input.js.map