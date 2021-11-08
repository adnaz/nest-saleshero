import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';
import { graphqlUploadExpress } from 'graphql-upload';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: /https?:\/\/(([^/]+\.)?holumbo\.com)$/i,
  });
  await app.listen(3000);
}
bootstrap();
