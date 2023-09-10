import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { Utilisateur } from './entities/utilisateur.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UtilisateursService {
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateursRepository: Repository<Utilisateur>,
  ) {}

  async create(createUtilisateurDto: CreateUtilisateurDto) {
    const utilisteur = this.utilisateursRepository.create(createUtilisateurDto);
    const result = await this.utilisateursRepository.save(utilisteur);
    return result;
  }

  // findAll() {
  //   return this.utilisateursRepository.find();
  // }

  async findOne(id: number) {
    const found = await this.utilisateursRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Utilisateur with the id ${id} not found`);
    }
    return found;
  }

  async update(id: number, updateUtilisateurDto: UpdateUtilisateurDto) {
    const utilisateur = await this.findOne(id);
    const newUtilisateur = this.utilisateursRepository.merge(utilisateur, updateUtilisateurDto);
    const result = await this.utilisateursRepository.save(newUtilisateur);
    return result;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} utilisateur`;
  // }
}
