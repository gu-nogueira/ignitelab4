import { Notification } from '../../src/app/entities/notification';
import { NotificationsRepository } from '../../src/app/repositories/notifications-repository';

// * This means 'notifications' will be an array of 'Notification' objects. Initialyzed empty

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  countManyByRecipientId(recipientId: string): Promise<number> {
    return Promise.resolve(
      this.notifications.filter((item) => item.recipientId === recipientId)
        .length,
    );
  }

  findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return Promise.resolve(
      this.notifications.filter((item) => item.recipientId === recipientId),
    );
  }

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
    return Promise.resolve();
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}
