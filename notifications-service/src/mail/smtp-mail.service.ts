import { MailService } from './mail.service';

export class SMTPMail implements MailService {
  sendMail(): string {
    return 'Mail sent via SMTP';
  }
}
