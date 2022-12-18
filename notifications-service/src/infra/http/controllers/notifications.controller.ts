import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/services/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

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
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification };
  }
}
