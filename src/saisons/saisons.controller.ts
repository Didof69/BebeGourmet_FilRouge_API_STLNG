import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaisonsService } from './saisons.service';
import { CreateSaisonDto } from './dto/create-saison.dto';
import { UpdateSaisonDto } from './dto/update-saison.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('saisons')
@ApiTags('Saisons Controller')
export class SaisonsController {
  constructor(private readonly saisonsService: SaisonsService) {}

  @Get()
  findAll() {
    return this.saisonsService.findAll();
  }
}
