import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';

import { NotificationsController } from './controllers/notifications.controller';

import { GetRecipientNotifications } from '@app/services/get-recipient-notifications';
import { CountRecipientNotifications } from '@app/services/count-recipient-notifications';
import { SendNotification } from '@app/services/send-notification';
import { CancelNotification } from '@app/services/cancel-notification';
import { ReadNotification } from '@app/services/read-notification';
import { UnreadNotification } from '@app/services/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    CountRecipientNotifications,
    GetRecipientNotifications,
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
