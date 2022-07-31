import { Controller, Post, Body } from '@nestjs/common';
import { PolendromStrDto } from './dto/polendrom-str.dto';
import { PreviosSymbolDto } from './dto/previos-symbol.dto';
import { StrService } from './str.service';

@Controller('str')
export class StrController {
  constructor(private readonly strService: StrService) {}

  @Post('polendrom/')
  Polendrom(@Body() PolendromStrDto: PolendromStrDto): string {
    return this.strService.polendromCheck(PolendromStrDto.str);
  }

  @Post('Previos_symbol/')
  PreviosSymbol(@Body() PreviosSymbolDto: PreviosSymbolDto): object {
    return this.strService.previosSymbol(PreviosSymbolDto.str);
  }
}
