// * With NestJS, we will use abstract classes instead of interfaces
// * This is because abstract classes can be used to define the structure of a class, but they can also be used to define the structure of a function

import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
  abstract create(notification: Notification): Promise<void>;
  abstract save(notification: Notification): Promise<void>;
}
