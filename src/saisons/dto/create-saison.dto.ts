import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSaisonDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  libelle: string;
}
