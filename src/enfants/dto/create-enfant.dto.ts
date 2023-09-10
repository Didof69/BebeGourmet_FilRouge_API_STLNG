import {
  IsISO8601,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateEnfantDto {
  @IsNotEmpty()
  @IsString()
  prenom: string;

  @IsNotEmpty()
  @IsISO8601({ strict: true })
  date_naissance: Date;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  id_utilisateur: number;
}

