import { IsString, IsNotEmpty } from "class-validator";

export class CreateRestrictionDto {
  @IsNotEmpty()
  @IsString()
  libelle: string;
}
