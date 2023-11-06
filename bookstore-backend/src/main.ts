import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


const cors = require("cors")


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  // app.get("/", (req, res) => {
  //   res.json({"Hey there :D Welcoome to our page"});
  // });
  
  

  await app.listen(3000);
}
bootstrap();
