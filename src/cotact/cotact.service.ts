import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { IUserInfo } from './interface/contact.interface';
@Injectable()
export class CotactService {
  constructor(private mailService: MailService) {}

  async contact(userInfo: IUserInfo) {
    await this.mailService.sendUserInfo(userInfo);
  }
}
