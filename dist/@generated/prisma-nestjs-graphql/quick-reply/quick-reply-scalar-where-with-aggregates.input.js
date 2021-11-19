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
var QuickReplyScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const bool_with_aggregates_filter_input_1 = require("../prisma/bool-with-aggregates-filter.input");
const enum_type_reply_with_aggregates_filter_input_1 = require("../prisma/enum-type-reply-with-aggregates-filter.input");
let QuickReplyScalarWhereWithAggregatesInput = QuickReplyScalarWhereWithAggregatesInput_1 = class QuickReplyScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [QuickReplyScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QuickReplyScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QuickReplyScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], QuickReplyScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], QuickReplyScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_with_aggregates_filter_input_1.BoolWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", bool_with_aggregates_filter_input_1.BoolWithAggregatesFilter)
], QuickReplyScalarWhereWithAggregatesInput.prototype, "keepIt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_type_reply_with_aggregates_filter_input_1.EnumTypeReplyWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", enum_type_reply_with_aggregates_filter_input_1.EnumTypeReplyWithAggregatesFilter)
], QuickReplyScalarWhereWithAggregatesInput.prototype, "type", void 0);
QuickReplyScalarWhereWithAggregatesInput = QuickReplyScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], QuickReplyScalarWhereWithAggregatesInput);
exports.QuickReplyScalarWhereWithAggregatesInput = QuickReplyScalarWhereWithAggregatesInput;
//# sourceMappingURL=quick-reply-scalar-where-with-aggregates.input.js.map