import { ApiProperty } from '@nestjs/swagger';

export class PreviosSymbolDto {
  @ApiProperty({ example: 'abccdceffgihhhhj' })
  str: string;
}
