import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EnfantsService } from './enfants.service';
import { CreateEnfantDto } from './dto/create-enfant.dto';
import { UpdateEnfantDto } from './dto/update-enfant.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Utilisateur } from 'src/utilisateurs/entities/utilisateur.entity';
import { Enfant } from './entities/enfant.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('enfants')
@UseGuards(AuthGuard())
@ApiTags('Enfants Controller')
export class EnfantsController {
  constructor(private readonly enfantsService: EnfantsService) {}

  @Post()
  create(
    @Body() createEnfantDto: CreateEnfantDto,
    @GetUser() utilisateur: Utilisateur,
  ): Promise<Enfant> {
    return this.enfantsService.create(createEnfantDto, utilisateur.id);
  }

  @Get()
  findEnfantByIdUtilisateur(@GetUser() utilisateur: Utilisateur): Promise<Enfant[]> {
    return this.enfantsService.findEnfantByIdUtilisateur(utilisateur.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser() utilisateur: Utilisateur) {
    return this.enfantsService.findOne(+id, utilisateur.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnfantDto: UpdateEnfantDto,
    @GetUser() utilisateur: Utilisateur,
  ) {
    return this.enfantsService.update(+id, updateEnfantDto, utilisateur.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @GetUser() utilisateur: Utilisateur) {
    return this.enfantsService.remove(+id, utilisateur.id);
  }
}
