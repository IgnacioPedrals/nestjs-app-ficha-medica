import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); 

  const config=new DocumentBuilder()
  .setTitle('Ficha Médica')
  .setDescription('')
  .setVersion('1.0')
  .build();

  app.enableCors();
const documents=SwaggerModule.createDocument(app, config);
SwaggerModule.setup('swagger', app, documents)
await app.listen(8080);
}
bootstrap();
