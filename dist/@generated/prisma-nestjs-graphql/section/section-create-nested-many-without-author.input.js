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
exports.SectionCreateNestedManyWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_without_author_input_1 = require("./section-create-without-author.input");
const section_create_or_connect_without_author_input_1 = require("./section-create-or-connect-without-author.input");
const section_create_many_author_input_envelope_input_1 = require("./section-create-many-author-input-envelope.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
let SectionCreateNestedManyWithoutAuthorInput = class SectionCreateNestedManyWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => [section_create_without_author_input_1.SectionCreateWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_create_or_connect_without_author_input_1.SectionCreateOrConnectWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_create_many_author_input_envelope_input_1.SectionCreateManyAuthorInputEnvelope, { nullable: true }),
    __metadata("design:type", section_create_many_author_input_envelope_input_1.SectionCreateManyAuthorInputEnvelope)
], SectionCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], SectionCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
SectionCreateNestedManyWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], SectionCreateNestedManyWithoutAuthorInput);
exports.SectionCreateNestedManyWithoutAuthorInput = SectionCreateNestedManyWithoutAuthorInput;
//# sourceMappingURL=section-create-nested-many-without-author.input.js.map