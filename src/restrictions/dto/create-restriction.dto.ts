import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateRestrictionDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  libelle: string;
}
