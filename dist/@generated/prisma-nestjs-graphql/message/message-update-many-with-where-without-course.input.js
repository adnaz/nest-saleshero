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
exports.MessageUpdateManyWithWhereWithoutCourseInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const message_scalar_where_input_1 = require("./message-scalar-where.input");
const message_update_many_mutation_input_1 = require("./message-update-many-mutation.input");
let MessageUpdateManyWithWhereWithoutCourseInput = class MessageUpdateManyWithWhereWithoutCourseInput {
};
__decorate([
    (0, graphql_1.Field)(() => message_scalar_where_input_1.MessageScalarWhereInput, { nullable: false }),
    __metadata("design:type", message_scalar_where_input_1.MessageScalarWhereInput)
], MessageUpdateManyWithWhereWithoutCourseInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_update_many_mutation_input_1.MessageUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", message_update_many_mutation_input_1.MessageUpdateManyMutationInput)
], MessageUpdateManyWithWhereWithoutCourseInput.prototype, "data", void 0);
MessageUpdateManyWithWhereWithoutCourseInput = __decorate([
    (0, graphql_2.InputType)()
], MessageUpdateManyWithWhereWithoutCourseInput);
exports.MessageUpdateManyWithWhereWithoutCourseInput = MessageUpdateManyWithWhereWithoutCourseInput;
//# sourceMappingURL=message-update-many-with-where-without-course.input.js.map