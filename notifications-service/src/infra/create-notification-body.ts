import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  // * The @IsNotEmpty() decorator is used to validate that the value is not empty.
  @IsNotEmpty()
  // * The @IsUUID() decorator is used to validate that the value is a valid UUID.
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  // * The @Length() decorator is used to validate that the value is a string with a length between the specified minimum and maximum.
  @Length(5, 240)
  content: string;

  category: string;
}
