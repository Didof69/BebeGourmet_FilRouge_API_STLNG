import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaisonsService } from './saisons.service';
import { CreateSaisonDto } from './dto/create-saison.dto';
import { UpdateSaisonDto } from './dto/update-saison.dto';

@Controller('saisons')
export class SaisonsController {
  constructor(private readonly saisonsService: SaisonsService) {}

  // @Post()
  // create(@Body() createSaisonDto: CreateSaisonDto) {
  //   return this.saisonsService.create(createSaisonDto);
  // }

  @Get()
  findAll() {
    return this.saisonsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.saisonsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSaisonDto: UpdateSaisonDto) {
  //   return this.saisonsService.update(+id, updateSaisonDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.saisonsService.remove(+id);
  // }
}
