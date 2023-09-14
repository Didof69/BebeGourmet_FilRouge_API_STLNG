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
  ) {}

  findAll() {
    return this.saisonsRepository.find();
  }
}
