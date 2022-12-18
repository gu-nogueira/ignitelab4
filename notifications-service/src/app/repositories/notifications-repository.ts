// * With NestJS, we will use abstract classes instead of interfaces
// * This is because abstract classes can be used to define the structure of a class, but they can also be used to define the structure of a function

import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  // * The <void> type means that this method will not return anything
  abstract create(notification: Notification): Promise<void>;
}
