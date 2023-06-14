import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
<<<<<<< HEAD
=======
  app.useGlobalPipes(new ValidationPipe());
>>>>>>> d14cd6cc890b8f1baaa319cef752852d5e4be448
  await app.listen(8080);
}
bootstrap();
