"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = require("tslib");
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
const sections_module_1 = require("./sections/sections.module");
const replies_module_1 = require("./replies/replies.module");
const quick_replies_module_1 = require("./quick-replies/quick-replies.module");
const quick_reply_values_module_1 = require("./quick-reply-values/quick-reply-values.module");
const apps_module_1 = require("./apps/apps.module");
const whitelist = ['http://localhost:3000', 'http://localhost:3001', 'https://www.holumbo.com', 'https://holumbo.com', 'https://studio.apollographql.com'];
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
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
            actors_module_1.ActorsModule,
            sections_module_1.SectionsModule,
            replies_module_1.RepliesModule,
            quick_replies_module_1.QuickRepliesModule,
            quick_reply_values_module_1.QuickReplyValuesModule,
            apps_module_1.AppsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService
            //   ,{
            //   provide: APP_GUARD,
            //   useClass: RolesGuard,
            // }
        ],
        exports: [prisma_service_1.PrismaService],
    })
], AppModule);
exports.AppModule = AppModule;
