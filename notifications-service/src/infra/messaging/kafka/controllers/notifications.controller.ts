import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { SendNotification } from '@app/services/send-notification';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class KafkaNotificationsController {
  constructor(private sendNotification: SendNotification) {}

  // EventPattern will be used to subscribe to events
  @EventPattern('notifications.send-notification')
  async handleSendNotification(@Payload() payload: SendNotificationPayload) {
    const { content, category, recipientId } = payload;

    await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
  }
}
