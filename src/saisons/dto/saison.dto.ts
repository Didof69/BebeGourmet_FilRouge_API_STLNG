import { IsString, IsNotEmpty, IsInt, Min, Max } from "class-validator";

export class SaisonDto {
  @IsInt()
  @Min(1)
  @Max(5)
  id: number;

  @IsNotEmpty()
  @IsString()
  libelle: string;
}
