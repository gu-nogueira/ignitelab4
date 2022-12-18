/* NOTES:
 * We will use getters and setters to handle each entity
 * This is following the OOP principles of encapsulation
 */

export interface NotificationProps {
  recipientId: string;
  content: string;
  category: string;
  // * Here's an important thing: the '?' means we inform to typescript that this property can be 'undefined' or 'null' after the pipe '|'. With 'null' we will override it.
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get content(): string {
    return this.props.content;
  }

  public set content(content: string) {
    this.props.content = content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  // * Note: here's motivation to enable 'strict' and 'strictNullChecks' in tsconfig.json

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  // * We will not use the 'set' method for 'createdAt' because it is a property that is set only once, when the notification is created.
}
