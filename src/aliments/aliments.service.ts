import { Injectable } from '@nestjs/common';
import { CreateAlimentDto } from './dto/create-aliment.dto';
import { UpdateAlimentDto } from './dto/update-aliment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aliment } from './entities/aliment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlimentsService {
  constructor(
    @InjectRepository(Aliment) private alimentsRepository: Repository<Aliment>,
  ) {}

  create(createAlimentDto: CreateAlimentDto) {
    return 'This action adds a new aliment';
  }

  findAll() {
    return this.alimentsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} aliment`;
  }

  update(id: number, updateAlimentDto: UpdateAlimentDto) {
    return `This action updates a #${id} aliment`;
  }

  remove(id: number) {
    return `This action removes a #${id} aliment`;
  }
}
