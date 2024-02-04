import { Notification, NotificationProps } from '@app/entities/notification';
import { Content } from '@app/entities/content';

// * 'Partial' is used to make the type 'NotificationProps' optional
type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Hello World!'),
    recipientId: 'example-recipient-id',
    ...override,
  });
}
