import { IsBoolean, IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class CreateUtilisateurDto {
  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsNotEmpty()
  @IsString()
  prenom: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/)
  mot_de_passe: string;

  @IsNotEmpty()
  @IsBoolean()
  admin: boolean;
}
