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
exports.AppCreateNestedManyWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_create_without_author_input_1 = require("./app-create-without-author.input");
const app_create_or_connect_without_author_input_1 = require("./app-create-or-connect-without-author.input");
const app_create_many_author_input_envelope_input_1 = require("./app-create-many-author-input-envelope.input");
const app_where_unique_input_1 = require("./app-where-unique.input");
let AppCreateNestedManyWithoutAuthorInput = class AppCreateNestedManyWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => [app_create_without_author_input_1.AppCreateWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], AppCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [app_create_or_connect_without_author_input_1.AppCreateOrConnectWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], AppCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_create_many_author_input_envelope_input_1.AppCreateManyAuthorInputEnvelope, { nullable: true }),
    __metadata("design:type", app_create_many_author_input_envelope_input_1.AppCreateManyAuthorInputEnvelope)
], AppCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [app_where_unique_input_1.AppWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], AppCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
AppCreateNestedManyWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], AppCreateNestedManyWithoutAuthorInput);
exports.AppCreateNestedManyWithoutAuthorInput = AppCreateNestedManyWithoutAuthorInput;
//# sourceMappingURL=app-create-nested-many-without-author.input.js.map