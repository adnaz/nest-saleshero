"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const graphql_1 = require("@nestjs/graphql");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const roles = this.reflector.get("roles", context.getHandler());
        const ctx = graphql_1.GqlExecutionContext.create(context);
        console.log("roles: ", roles);
        console.log("gqlContext: ", ctx.getContext().req.user);
        const { user } = ctx.getContext().req;
        if (user) {
            return roles.includes(user === null || user === void 0 ? void 0 : user.role);
        }
        return true;
    }
};
RolesGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__metadata)("design:paramtypes", [core_1.Reflector])
], RolesGuard);
exports.RolesGuard = RolesGuard;
