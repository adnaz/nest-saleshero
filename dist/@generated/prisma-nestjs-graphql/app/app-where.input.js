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
var AppWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let AppWhereInput = AppWhereInput_1 = class AppWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [AppWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], AppWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AppWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], AppWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AppWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], AppWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], AppWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], AppWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], AppWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], AppWhereInput.prototype, "updatedAt", void 0);
AppWhereInput = AppWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], AppWhereInput);
exports.AppWhereInput = AppWhereInput;
//# sourceMappingURL=app-where.input.js.map