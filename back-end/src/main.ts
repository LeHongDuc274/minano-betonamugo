import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('/api/v1');

  const options = new DocumentBuilder()
    .setTitle('minano-betonamugo API v1')
    .setDescription('Base URL: /api/v1')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: true
  });
  SwaggerModule.setup('/', app, document);

  await app.listen(4000);
}
bootstrap();
