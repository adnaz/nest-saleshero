"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutSectionsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_sections_input_1 = require("./user-create-without-sections.input");
const user_create_or_connect_without_sections_input_1 = require("./user-create-or-connect-without-sections.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
let UserCreateNestedOneWithoutSectionsInput = class UserCreateNestedOneWithoutSectionsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_sections_input_1.UserCreateWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_without_sections_input_1.UserCreateWithoutSectionsInput)
], UserCreateNestedOneWithoutSectionsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_or_connect_without_sections_input_1.UserCreateOrConnectWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_or_connect_without_sections_input_1.UserCreateOrConnectWithoutSectionsInput)
], UserCreateNestedOneWithoutSectionsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutSectionsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutSectionsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserCreateNestedOneWithoutSectionsInput);
exports.UserCreateNestedOneWithoutSectionsInput = UserCreateNestedOneWithoutSectionsInput;
