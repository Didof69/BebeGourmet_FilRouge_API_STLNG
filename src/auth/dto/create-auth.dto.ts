import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export class CreateAuthDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nom: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  prenom: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @Matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/)
  mot_de_passe: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  admin: boolean;
}
