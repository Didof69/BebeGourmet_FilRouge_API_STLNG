import { IsNotEmpty, IsString } from "class-validator";

export class CreateSaisonDto {
  @IsNotEmpty()
  @IsString()
  libelle: string;
}
