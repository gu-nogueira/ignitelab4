import { Injectable } from '@nestjs/common';

// * The @Injectable() decorator is used to mark a class as a provider. It is used to inject dependencies into a class using SOLID principles.
// * A provider is a class that provides a service. It can be a class, a function, or a value.

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
