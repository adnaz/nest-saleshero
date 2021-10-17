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
exports.UserCreateOrConnectWithoutPostsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_create_without_posts_input_1 = require("./user-create-without-posts.input");
let UserCreateOrConnectWithoutPostsInput = class UserCreateOrConnectWithoutPostsInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: false }),
    __metadata("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutPostsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_without_posts_input_1.UserCreateWithoutPostsInput, { nullable: false }),
    __metadata("design:type", user_create_without_posts_input_1.UserCreateWithoutPostsInput)
], UserCreateOrConnectWithoutPostsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutPostsInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateOrConnectWithoutPostsInput);
exports.UserCreateOrConnectWithoutPostsInput = UserCreateOrConnectWithoutPostsInput;
//# sourceMappingURL=user-create-or-connect-without-posts.input.js.map