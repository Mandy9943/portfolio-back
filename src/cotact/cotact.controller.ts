import { Controller, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { CotactService } from './cotact.service';
import { UserInfoDTO } from './dto/contact.dto';
@Controller('cotact')
export class CotactController {
  constructor(private readonly contactService: CotactService) {}
  @Post('/')
  async sendContact(@Res() res, @Body() userInfoDTO: UserInfoDTO) {
    console.log(process.env.MAIL_USER);
    console.log(process.env.MAIL_PASSWORD);

    try {
      await this.contactService.contact(userInfoDTO);

      return res.status(HttpStatus.OK).json({
        message: 'success',
        object: userInfoDTO,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
