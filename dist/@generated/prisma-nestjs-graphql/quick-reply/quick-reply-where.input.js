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
var QuickReplyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const enum_type_reply_filter_input_1 = require("../prisma/enum-type-reply-filter.input");
const quick_reply_value_list_relation_filter_input_1 = require("../quick-reply-value/quick-reply-value-list-relation-filter.input");
let QuickReplyWhereInput = QuickReplyWhereInput_1 = class QuickReplyWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [QuickReplyWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QuickReplyWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QuickReplyWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], QuickReplyWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_type_reply_filter_input_1.EnumTypeReplyFilter, { nullable: true }),
    __metadata("design:type", enum_type_reply_filter_input_1.EnumTypeReplyFilter)
], QuickReplyWhereInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => quick_reply_value_list_relation_filter_input_1.QuickReplyValueListRelationFilter, { nullable: true }),
    __metadata("design:type", quick_reply_value_list_relation_filter_input_1.QuickReplyValueListRelationFilter)
], QuickReplyWhereInput.prototype, "values", void 0);
QuickReplyWhereInput = QuickReplyWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyWhereInput);
exports.QuickReplyWhereInput = QuickReplyWhereInput;
//# sourceMappingURL=quick-reply-where.input.js.map