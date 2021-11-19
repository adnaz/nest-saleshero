import { Module,MiddlewareConsumer } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import { GraphQLUpload , graphqlUploadExpress } from "graphql-upload"
import { MulterModule } from '@nestjs/platform-express';
import { FilesModule } from './files/files.module';
import { ActorsModule } from './actors/actors.module';
import { SectionsModule } from './sections/sections.module';
import { RepliesModule } from './replies/replies.module';
import { QuickRepliesModule } from './quick-replies/quick-replies.module';
import { QuickReplyValuesModule } from './quick-reply-values/quick-reply-values.module';
import { AppsModule } from './apps/apps.module';
const whitelist = ['http://localhost:3000','http://localhost:3001','https://www.holumbo.com', 'https://holumbo.com','https://studio.apollographql.com'];
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cors: {
        origin: function (origin, callback) {
          if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
          } else {
            console.log(origin)
            callback(new Error('Not allowed by CORS'))
          }
        },
        credentials: true
      }
    }),
    MulterModule.register({
      dest: './files',
    }),
    CoursesModule,
    UsersModule,
    PostsModule,
    AuthModule,
    FilesModule,
    ActorsModule,
    SectionsModule,
    RepliesModule,
    QuickRepliesModule,
    QuickReplyValuesModule,
    AppsModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService
  //   ,{
  //   provide: APP_GUARD,
  //   useClass: RolesGuard,
  // }
],
  exports: [PrismaService],

})
export class AppModule { 
}
