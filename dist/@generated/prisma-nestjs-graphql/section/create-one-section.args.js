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
exports.CreateOneSectionArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_input_1 = require("./section-create.input");
let CreateOneSectionArgs = class CreateOneSectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => section_create_input_1.SectionCreateInput, { nullable: false }),
    __metadata("design:type", section_create_input_1.SectionCreateInput)
], CreateOneSectionArgs.prototype, "data", void 0);
CreateOneSectionArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateOneSectionArgs);
exports.CreateOneSectionArgs = CreateOneSectionArgs;
//# sourceMappingURL=create-one-section.args.js.map