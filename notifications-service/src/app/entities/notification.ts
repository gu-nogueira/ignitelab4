/* NOTES:
 * We will use getters and setters to handle each entity
 * This is following the OOP principles of encapsulation
 */

import { Replace } from '@helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  // * We will use the 'Content' class to handle the content of the notification
  category: string;
  // * Here's an important thing: the '?' means we inform to typescript that this property can be 'undefined' or 'null' after the pipe '|'. With 'null' we will override it.
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  // * id will not be in props for 2 reasons:
  // * 1. It will be generated in application before being saved in database
  // * 2. This is a way to prepare to allocate to it's own class, and all entities could extend from a 'BaseEntity' class
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set content(content: Content) {
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

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  // * We will not use the 'set' method for 'createdAt' because it is a property that is set only once, when the notification is created.
}
