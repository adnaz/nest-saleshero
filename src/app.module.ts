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
import { SectionsModule } from './sections/sections.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MulterModule.register({
      dest: './files',
    }),
    CoursesModule,
    UsersModule,
    PostsModule,
    AuthModule,
    SectionsModule],
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
