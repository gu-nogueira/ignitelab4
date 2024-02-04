import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';
import { logLevel } from '@nestjs/microservices/external/kafka.interface';

import requiredEnv from '@helpers/requiredEnv';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    const kafkaEnv = {
      KAFKA_PROVIDER: requiredEnv('KAFKA_PROVIDER'),
      KAFKA_BROKER: requiredEnv('KAFKA_BROKER'),
      KAFKA_MECHANISM: requiredEnv('KAFKA_MECHANISM'),
      KAFKA_USERNAME: requiredEnv('KAFKA_USERNAME'),
      KAFKA_PASSWORD: requiredEnv('KAFKA_PASSWORD'),
    };

    super({
      client: {
        clientId: 'notifications',
        brokers: [kafkaEnv.KAFKA_BROKER],
        ssl: kafkaEnv.KAFKA_PROVIDER === 'local' ? false : true,
        sasl: {
          mechanism: kafkaEnv.KAFKA_MECHANISM as 'scram-sha-256',
          username: kafkaEnv.KAFKA_USERNAME,
          password: kafkaEnv.KAFKA_PASSWORD,
        },
        logLevel: logLevel.ERROR,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
