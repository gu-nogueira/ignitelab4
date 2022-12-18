import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    // * This is a excelent example of a dependency inversion case. Who is responsible for calling and instancing the 'SendNotification' use case will determine what will be his dependencies.
    const sendNotification = new SendNotification(notificationsRepository);
    const { notification } = await sendNotification.execute({
      recipientId: 'example-recipient-id',
      content: 'Hello world!',
      category: 'social',
    });
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
