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
exports.ReplyUpdateManyWithWhereWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const reply_scalar_where_input_1 = require("./reply-scalar-where.input");
const reply_update_many_mutation_input_1 = require("./reply-update-many-mutation.input");
let ReplyUpdateManyWithWhereWithoutUserInput = class ReplyUpdateManyWithWhereWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => reply_scalar_where_input_1.ReplyScalarWhereInput, { nullable: false }),
    __metadata("design:type", reply_scalar_where_input_1.ReplyScalarWhereInput)
], ReplyUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_update_many_mutation_input_1.ReplyUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", reply_update_many_mutation_input_1.ReplyUpdateManyMutationInput)
], ReplyUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
ReplyUpdateManyWithWhereWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], ReplyUpdateManyWithWhereWithoutUserInput);
exports.ReplyUpdateManyWithWhereWithoutUserInput = ReplyUpdateManyWithWhereWithoutUserInput;
//# sourceMappingURL=reply-update-many-with-where-without-user.input.js.map