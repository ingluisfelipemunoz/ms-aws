import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//ms-b-notification
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('myport', process.env.PORT);
  await app.listen(process.env.PORT);
}
bootstrap();
