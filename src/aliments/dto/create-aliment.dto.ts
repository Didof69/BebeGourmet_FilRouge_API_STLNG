import { ApiProperty } from '@nestjs/swagger';
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
import { RestrictionDto } from 'src/restrictions/dto/restriction.dto';
import { Restriction } from 'src/restrictions/entities/restriction.entity';
import { SaisonDto } from 'src/saisons/dto/saison.dto';
import { Saison } from 'src/saisons/entities/saison.entity';

export class CreateAlimentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  libelle: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(36)
  age_introduction: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(8)
  id_categorie: number;

  @ApiProperty()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true }) // Valide chaque élément du tableau
  @Type(() => SaisonDto) // Utilisez le DTO de validation des Saison
  saisons: Saison[];

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true }) // Valide chaque élément du tableau
  @Type(() => RestrictionDto) // Utilisez le DTO de validation des Saison
  restrictions: Restriction[];
}