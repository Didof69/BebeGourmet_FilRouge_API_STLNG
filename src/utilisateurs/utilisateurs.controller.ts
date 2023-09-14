import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Utilisateur } from './entities/utilisateur.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('utilisateurs')
@ApiTags('Utilisateurs Controller')
export class UtilisateursController {
  constructor(private readonly utilisateursService: UtilisateursService) {}

  @Get() //pour que l'utilisateur puisse accéder à son profil
  @UseGuards(AuthGuard())
  findOne(@GetUser() utilisateur: Utilisateur) {
    return this.utilisateursService.findOne(utilisateur.id);
  }
}
