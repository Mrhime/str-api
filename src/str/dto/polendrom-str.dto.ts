import { ApiProperty } from '@nestjs/swagger';

export class PolendromStrDto {
  @ApiProperty({ example: 'оно' })
  str: string;
}
