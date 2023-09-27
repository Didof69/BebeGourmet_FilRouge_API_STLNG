import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { AlimentsService } from './aliments.service';
import { CreateAlimentDto } from './dto/create-aliment.dto';
import { UpdateAlimentDto } from './dto/update-aliment.dto';
import { GetUser } from 'src/auth/get-user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { Utilisateur } from 'src/utilisateurs/entities/utilisateur.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('aliments')
@ApiTags('Aliments Controller')
export class AlimentsController {
  constructor(private readonly alimentsService: AlimentsService) {}

  @Post()
  @UseGuards(AuthGuard())
  create(
    @Body() createAlimentDto: CreateAlimentDto,
    @GetUser() utilisateur: Utilisateur,
  ) {
    if (!utilisateur.admin) {
      throw new UnauthorizedException('Droits admin nécéssaires');
    }
    return this.alimentsService.create(createAlimentDto);
  }

  @Get()
  findAll() {
    return this.alimentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alimentsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  update(
    @Param('id') id: string,
    @Body() updateAlimentDto: UpdateAlimentDto,
    @GetUser() utilisateur: Utilisateur,
  ) {
    if (!utilisateur.admin) {
      // console.log('create aliment', utilisateur);
      throw new UnauthorizedException('Droits admin nécéssaires');
    }
    // console.log('create aliment', utilisateur);
    return this.alimentsService.update(+id, updateAlimentDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  remove(@Param('id') id: string, @GetUser() utilisateur: Utilisateur) {
    if (!utilisateur.admin) {
      // console.log('create aliment', utilisateur);
      throw new UnauthorizedException('Droits admin nécéssaires');
    }
    return this.alimentsService.remove(+id);
  }
}
