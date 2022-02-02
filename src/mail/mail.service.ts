import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { IUserInfo } from "src/cotact/interface/contact.interface";
// import { User } from './../user/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserInfo(userInfo: IUserInfo) {
    await this.mailerService.sendMail({
      to: "armandoc9943@gmail.com",
      from: "Portafolio web <armando-portafolio>",
      // from: '"Support Team" <support@example.com>', // override default from
      subject: `Mensaje de ${userInfo.email} desde el portafolio`,
      template: "./confirmation", // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        email: userInfo.email,
        message: userInfo.message,
      },
    });
  }
}
