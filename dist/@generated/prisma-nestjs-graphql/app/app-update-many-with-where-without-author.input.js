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
exports.AppUpdateManyWithWhereWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_scalar_where_input_1 = require("./app-scalar-where.input");
const app_update_many_mutation_input_1 = require("./app-update-many-mutation.input");
let AppUpdateManyWithWhereWithoutAuthorInput = class AppUpdateManyWithWhereWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => app_scalar_where_input_1.AppScalarWhereInput, { nullable: false }),
    __metadata("design:type", app_scalar_where_input_1.AppScalarWhereInput)
], AppUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => app_update_many_mutation_input_1.AppUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", app_update_many_mutation_input_1.AppUpdateManyMutationInput)
], AppUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
AppUpdateManyWithWhereWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], AppUpdateManyWithWhereWithoutAuthorInput);
exports.AppUpdateManyWithWhereWithoutAuthorInput = AppUpdateManyWithWhereWithoutAuthorInput;
//# sourceMappingURL=app-update-many-with-where-without-author.input.js.map