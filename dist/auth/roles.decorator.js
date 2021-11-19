"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorize = exports.Roles = exports.ROLES_KEY = void 0;
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("./gql-auth.guard");
const roles_guard_1 = require("./roles.guard");
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;
const Authorize = (roles) => (0, common_1.applyDecorators)((0, common_1.SetMetadata)('roles', [roles].flat()), (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, roles_guard_1.RolesGuard));
exports.Authorize = Authorize;
//# sourceMappingURL=roles.decorator.js.map