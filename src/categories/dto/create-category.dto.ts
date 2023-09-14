import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  libelle: string;
}
