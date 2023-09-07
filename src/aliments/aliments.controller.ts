import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlimentsService } from './aliments.service';
import { CreateAlimentDto } from './dto/create-aliment.dto';
import { UpdateAlimentDto } from './dto/update-aliment.dto';

@Controller('aliments')
export class AlimentsController {
  constructor(private readonly alimentsService: AlimentsService) {}

  @Post()
  create(@Body() createAlimentDto: CreateAlimentDto) {
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
  update(@Param('id') id: string, @Body() updateAlimentDto: UpdateAlimentDto) {
    return this.alimentsService.update(+id, updateAlimentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alimentsService.remove(+id);
  }
}
