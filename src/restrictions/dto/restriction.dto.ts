import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class RestrictionDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(15)
  id: number;
}
