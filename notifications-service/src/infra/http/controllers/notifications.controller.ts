import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { SendNotification } from '@app/services/send-notification';
import { CancelNotification } from '@app/services/cancel-notification';
import { ReadNotification } from '@app/services/read-notification';
import { UnreadNotification } from '@app/services/unread-notification';
import { CountRecipientNotifications } from '@app/services/count-recipient-notifications';
import { GetRecipientNotifications } from '@app/services/get-recipient-notifications';

import { CreateNotificationBody } from '../dtos/create-notification-body';

import { NotificationViewModel } from '../view-models/notification-view-model';

// * Every funcntion that inits with '@' is a decorator that herds the function that follows it.

// * The @Controller() decorator is used to mark a class as a controller.

/*  About the @Get() decorator **
 * It is used to mark a method as a route handler;
 * It takes a string argument that specifies the route path;
 * It can be used multiple times to define multiple routes;
 * It can be used with other HTTP request methods, such as @Post(), @Put(), @Delete(), etc;
 * It can also be used with a regular expression to match multiple routes;
 * It can also be used with a wildcard to match multiple routes;
 */

// * Notice: Nest uses SOLID principles. A example of this is the use of dependency inversion principle. The controller does not create the service, it is injected into the controller.

@Controller('notifications')
export class NotificationsController {
  constructor(
    private countRecipientNotifications: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications,
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
  ) {}

  @Get('count/from/:recipientId')
  async countByRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotifications.execute({
      recipientId,
    });

    return { count };
  }

  @Get('from/:recipientId')
  async getByRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    });

    return { notifications: notifications.map(NotificationViewModel.toHTTP) };
  }

  @Post()
  @HttpCode(201)
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id,
    });
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id,
    });
  }
}
