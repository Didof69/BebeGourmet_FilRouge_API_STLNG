import { Injectable, NotFoundException } from '@nestjs/common';
import { Utilisateur } from './entities/utilisateur.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UtilisateursService {
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateursRepository: Repository<Utilisateur>,
  ) {}

  async findOne(id: number) {
    const found = await this.utilisateursRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Utilisateur with the id ${id} not found`);
    }
    return found;
  }
}
