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
var NestedEnumTypeReplyFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTypeReplyFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const type_reply_enum_1 = require("./type-reply.enum");
let NestedEnumTypeReplyFilter = NestedEnumTypeReplyFilter_1 = class NestedEnumTypeReplyFilter {
};
__decorate([
    (0, graphql_1.Field)(() => type_reply_enum_1.TypeReply, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumTypeReplyFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [type_reply_enum_1.TypeReply], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumTypeReplyFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [type_reply_enum_1.TypeReply], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumTypeReplyFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumTypeReplyFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumTypeReplyFilter)
], NestedEnumTypeReplyFilter.prototype, "not", void 0);
NestedEnumTypeReplyFilter = NestedEnumTypeReplyFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumTypeReplyFilter);
exports.NestedEnumTypeReplyFilter = NestedEnumTypeReplyFilter;
//# sourceMappingURL=nested-enum-type-reply-filter.input.js.map