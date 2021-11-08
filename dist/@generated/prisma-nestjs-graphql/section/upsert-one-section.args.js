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
exports.UpsertOneSectionArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_unique_input_1 = require("./section-where-unique.input");
const section_create_input_1 = require("./section-create.input");
const section_update_input_1 = require("./section-update.input");
let UpsertOneSectionArgs = class UpsertOneSectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: false }),
    __metadata("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], UpsertOneSectionArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_create_input_1.SectionCreateInput, { nullable: false }),
    __metadata("design:type", section_create_input_1.SectionCreateInput)
], UpsertOneSectionArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_update_input_1.SectionUpdateInput, { nullable: false }),
    __metadata("design:type", section_update_input_1.SectionUpdateInput)
], UpsertOneSectionArgs.prototype, "update", void 0);
UpsertOneSectionArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneSectionArgs);
exports.UpsertOneSectionArgs = UpsertOneSectionArgs;
//# sourceMappingURL=upsert-one-section.args.js.map