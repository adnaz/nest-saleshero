"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorUncheckedCreateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const reply_unchecked_create_nested_many_without_user_input_1 = require("../reply/reply-unchecked-create-nested-many-without-user.input");
let ActorUncheckedCreateInput = class ActorUncheckedCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ActorUncheckedCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], ActorUncheckedCreateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], ActorUncheckedCreateInput.prototype, "fileId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorUncheckedCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], ActorUncheckedCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_unchecked_create_nested_many_without_user_input_1.ReplyUncheckedCreateNestedManyWithoutUserInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_unchecked_create_nested_many_without_user_input_1.ReplyUncheckedCreateNestedManyWithoutUserInput)
], ActorUncheckedCreateInput.prototype, "replies", void 0);
ActorUncheckedCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], ActorUncheckedCreateInput);
exports.ActorUncheckedCreateInput = ActorUncheckedCreateInput;
