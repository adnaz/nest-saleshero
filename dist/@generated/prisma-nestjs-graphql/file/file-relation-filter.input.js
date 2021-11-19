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
exports.FileRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_where_input_1 = require("./file-where.input");
let FileRelationFilter = class FileRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => file_where_input_1.FileWhereInput, { nullable: true }),
    __metadata("design:type", file_where_input_1.FileWhereInput)
], FileRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_where_input_1.FileWhereInput, { nullable: true }),
    __metadata("design:type", file_where_input_1.FileWhereInput)
], FileRelationFilter.prototype, "isNot", void 0);
FileRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], FileRelationFilter);
exports.FileRelationFilter = FileRelationFilter;
//# sourceMappingURL=file-relation-filter.input.js.map