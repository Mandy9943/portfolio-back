import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CotactModule } from './cotact/cotact.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CotactModule,
    MailModule,
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
