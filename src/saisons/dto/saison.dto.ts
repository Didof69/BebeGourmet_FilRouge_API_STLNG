import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsInt, Min, Max } from "class-validator";

export class SaisonDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  id: number;
}
