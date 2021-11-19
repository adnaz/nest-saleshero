import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';
import { graphqlUploadExpress } from 'graphql-upload';
const whitelist = ['http://localhost:3001','https://www.holumbo.com', 'https://holumbo.com','http://localhost:3000','https://studio.apollographql.com'];
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        console.log(origin)
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true
  });
  await app.listen(3000);
}
bootstrap();
