import { Injectable } from '@nestjs/common';
import { CreateSaisonDto } from './dto/create-saison.dto';
import { UpdateSaisonDto } from './dto/update-saison.dto';
import { Saison } from './entities/saison.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SaisonsService {
  constructor(
    @InjectRepository(Saison)
    private saisonsRepository: Repository<Saison>,
  ) { }
  
  // create(createSaisonDto: CreateSaisonDto) {
  //   return 'This action adds a new saison';
  // }

  findAll() {
    return this.saisonsRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} saison`;
  // }

  // update(id: number, updateSaisonDto: UpdateSaisonDto) {
  //   return `This action updates a #${id} saison`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} saison`;
  // }
}
