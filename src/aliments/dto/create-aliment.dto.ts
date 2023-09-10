import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { SaisonDto } from 'src/saisons/dto/saison.dto';
import { Saison } from 'src/saisons/entities/saison.entity';

export class CreateAlimentDto {
  @IsNotEmpty()
  @IsString()
  libelle: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(36)
  age_introduction: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(8)
  id_categorie: number;

  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true }) // Valide chaque élément du tableau
  @Type(() => SaisonDto) // Utilisez le DTO de validation des Saison
  saisons: Saison[];
}
