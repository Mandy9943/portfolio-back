import { Module } from '@nestjs/common';
import { MailModule } from 'src/mail/mail.module';
import { CotactController } from './cotact.controller';
import { CotactService } from './cotact.service';

@Module({
  imports: [MailModule],
  controllers: [CotactController],
  providers: [CotactService],
})
export class CotactModule {}
