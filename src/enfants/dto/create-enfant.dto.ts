import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsISO8601,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { RestrictionDto } from 'src/restrictions/dto/restriction.dto';
import { Restriction } from 'src/restrictions/entities/restriction.entity';

export class CreateEnfantDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  prenom: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsISO8601({ strict: true })
  date_naissance: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  id_utilisateur: number;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true }) // Valide chaque élément du tableau
  @Type(() => RestrictionDto) // Utilisez le DTO de validation des Saison
  restrictions: Restriction[];
}

