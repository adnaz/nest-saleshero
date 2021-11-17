"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const courses_module_1 = require("./courses/courses.module");
const prisma_service_1 = require("./prisma.service");
const users_module_1 = require("./users/users.module");
const posts_module_1 = require("./posts/posts.module");
const auth_module_1 = require("./auth/auth.module");
const platform_express_1 = require("@nestjs/platform-express");
const files_module_1 = require("./files/files.module");
const actors_module_1 = require("./actors/actors.module");
const whitelist = ['http://localhost:3000', 'https://holumbo.com', 'https://studio.apollographql.com'];
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                cors: {
                    origin: function (origin, callback) {
                        if (!origin || whitelist.indexOf(origin) !== -1) {
                            callback(null, true);
                        }
                        else {
                            console.log(origin);
                            callback(new Error('Not allowed by CORS'));
                        }
                    },
                    credentials: true
                }
            }),
            platform_express_1.MulterModule.register({
                dest: './files',
            }),
            courses_module_1.CoursesModule,
            users_module_1.UsersModule,
            posts_module_1.PostsModule,
            auth_module_1.AuthModule,
            files_module_1.FilesModule,
            actors_module_1.ActorsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService
        ],
        exports: [prisma_service_1.PrismaService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map