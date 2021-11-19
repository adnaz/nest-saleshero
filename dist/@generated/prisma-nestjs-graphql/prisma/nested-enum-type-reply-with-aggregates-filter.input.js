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
var NestedEnumTypeReplyWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTypeReplyWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_reply_enum_1 = require("./type-reply.enum");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_type_reply_filter_input_1 = require("./nested-enum-type-reply-filter.input");
let NestedEnumTypeReplyWithAggregatesFilter = NestedEnumTypeReplyWithAggregatesFilter_1 = class NestedEnumTypeReplyWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumTypeReplyWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [type_reply_enum_1.TypeReply], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumTypeReplyWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [type_reply_enum_1.TypeReply], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumTypeReplyWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumTypeReplyWithAggregatesFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumTypeReplyWithAggregatesFilter)
], NestedEnumTypeReplyWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], NestedEnumTypeReplyWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_type_reply_filter_input_1.NestedEnumTypeReplyFilter, { nullable: true }),
    __metadata("design:type", nested_enum_type_reply_filter_input_1.NestedEnumTypeReplyFilter)
], NestedEnumTypeReplyWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_type_reply_filter_input_1.NestedEnumTypeReplyFilter, { nullable: true }),
    __metadata("design:type", nested_enum_type_reply_filter_input_1.NestedEnumTypeReplyFilter)
], NestedEnumTypeReplyWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumTypeReplyWithAggregatesFilter = NestedEnumTypeReplyWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumTypeReplyWithAggregatesFilter);
exports.NestedEnumTypeReplyWithAggregatesFilter = NestedEnumTypeReplyWithAggregatesFilter;
//# sourceMappingURL=nested-enum-type-reply-with-aggregates-filter.input.js.map