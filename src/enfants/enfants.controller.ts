import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnfantsService } from './enfants.service';
import { CreateEnfantDto } from './dto/create-enfant.dto';
import { UpdateEnfantDto } from './dto/update-enfant.dto';

@Controller('enfants')
export class EnfantsController {
  constructor(private readonly enfantsService: EnfantsService) {}

  @Post()
  create(@Body() createEnfantDto: CreateEnfantDto) {
    return this.enfantsService.create(createEnfantDto);
  }

  @Get()
  findAll() {
    return this.enfantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enfantsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnfantDto: UpdateEnfantDto) {
    return this.enfantsService.update(+id, updateEnfantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enfantsService.remove(+id);
  }
}
