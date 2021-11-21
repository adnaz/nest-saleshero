"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutSectionsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_create_without_sections_input_1 = require("./user-create-without-sections.input");
let UserCreateOrConnectWithoutSectionsInput = class UserCreateOrConnectWithoutSectionsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutSectionsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_sections_input_1.UserCreateWithoutSectionsInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_create_without_sections_input_1.UserCreateWithoutSectionsInput)
], UserCreateOrConnectWithoutSectionsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutSectionsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserCreateOrConnectWithoutSectionsInput);
exports.UserCreateOrConnectWithoutSectionsInput = UserCreateOrConnectWithoutSectionsInput;
