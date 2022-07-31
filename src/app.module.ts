import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { StrModule } from './str/str.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.dev.env', '.env'],
      isGlobal: true,
      cache: false,
    }),
    StrModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
