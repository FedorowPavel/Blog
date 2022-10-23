import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as cookieParser from 'cookie-parser';


async function start() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule)

  app.enableCors({credentials: true, origin: 'http://localhost:3000'})
  app.use(cookieParser());

  const configSwagger = new DocumentBuilder()
    .setTitle('Advanced backend')
    .setDescription('Documentation of REST API')
    .setVersion('1.0.0')
    .addTag('Pavel')
    .build()
  const documentation = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup('/api/docs', app, documentation)


  // app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`server works on ${process.env.PORT} in ${process.env.NODE_ENV} mode`))
}

start()
