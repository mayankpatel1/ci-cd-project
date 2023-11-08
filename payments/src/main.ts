
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';


import { AppModule } from './app.module';


async function bootstrap() {
  // REST API
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3000);
  
  
      },
    }
  });
  app.startAllMicroservices();
}
bootstrap();
