import { Module } from '@nestjs/common';
import { StrService } from './str.service';
import { StrController } from './str.controller';

@Module({
  controllers: [StrController],
  providers: [StrService]
})
export class StrModule {}
