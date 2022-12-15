import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';

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
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
