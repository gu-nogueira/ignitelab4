import { Module } from '@nestjs/common';

import { SendNotification } from '@app/services/send-notification';

import { KafkaConsumerService } from './kafka/kafka-consumer.service';
import { KafkaNotificationsController } from './kafka/controllers/notifications.controller';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  // ** DatabaseModule is needed because use-cases uses repositories, which uses database.
  imports: [DatabaseModule],
  controllers: [KafkaNotificationsController],
  providers: [KafkaConsumerService, SendNotification],
})
export class MessagingModule {}
