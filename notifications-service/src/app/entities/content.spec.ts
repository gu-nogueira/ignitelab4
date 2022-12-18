import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a new notification content', () => {
    const content = new Content('Você tem uma nova mensagem');
    expect(content).toBeTruthy();
  });

  it('should NOT be able to create a new notification content with less than 5 characters', () => {
    expect(() => new Content('1234')).toThrow(
      new Error('Content must have between 5 and 240 characters'),
    );
  });

  it('should NOT be able to create a new notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow(
      new Error('Content must have between 5 and 240 characters'),
    );
  });
});
