import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEnfantDto } from './dto/create-enfant.dto';
import { UpdateEnfantDto } from './dto/update-enfant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enfant } from './entities/enfant.entity';
import { log } from 'console';

@Injectable()
export class EnfantsService {
  constructor(
    @InjectRepository(Enfant)
    private enfantsRepository: Repository<Enfant>,
  ) {}

  async create(createEnfantDto: CreateEnfantDto, id_utilisateur: number) {
        if (this.calculerAgeEnMois(createEnfantDto.date_naissance)<4) {
          throw new ConflictException("L'enfant est trop petit.");
        }
    
    const enfant = this.enfantsRepository.create(createEnfantDto);
    enfant.id_utilisateur = id_utilisateur;
    const result = await this.enfantsRepository.save(enfant);
    return result;
  }

  async findEnfantByIdUtilisateur(id_utilisateur: number): Promise<Enfant[]> {
    const found = await this.enfantsRepository.find({
      where: { id_utilisateur },
    });

    if (!found) {
      throw new NotFoundException(
        `Aucun enfant n'a été retrouvé pour cet utilisateur.`,
      );
    }

    return found;
  }

  async findOne(idEnfant: number, idUtilisateur: number) {
    const found = await this.enfantsRepository.findOneBy({ id: idEnfant });

    // vérifie si l'enfant est bien dans la base de données
    if (!found) {
      throw new NotFoundException(`Enfant with the id ${idEnfant} not found`);
    }
    // vérifie si l'utilisateur est bien le propriétaire de l'enfant
    if (found.id_utilisateur !== idUtilisateur) {
      throw new ForbiddenException(
        `Vous ne detenez pas les droits pour afficher cet enfant.`,
      );
    }

    return found;
  }

  async update(
    idEnfant: number,
    updateEnfantDto: UpdateEnfantDto,
    idUtilisateur: number,
  ) {
    const enfant = await this.findOne(idEnfant, idUtilisateur);

    // si des restriction sont fournies, les mettre à jour
    if (updateEnfantDto.restrictions) {
      enfant.restrictions = updateEnfantDto.restrictions;
    }
    //  fusionne les infos
    const updatedEnfant = this.enfantsRepository.merge(enfant, updateEnfantDto);

    // sauvegarde l'enfant
    const result = await this.enfantsRepository.save(updatedEnfant);
    return result;
  }

  async remove(idEnfant: number, idUtilisateur: number) {
    const enfant = await this.findOne(idEnfant, idUtilisateur);
    const response = await this.enfantsRepository.remove(enfant);
    return response;
  }

  calculerAgeEnMois(dateNaissance: Date): number {
    const today = new Date(); //récuperer la date actuelle
    const dateAnniv = new Date(dateNaissance); //représente date de naissance enfant

    let mois = (today.getFullYear() - dateAnniv.getFullYear()) * 12;
    //ex: 2023-2022 = 1 => 1*12 = 12 mois
    mois += today.getMonth() - dateAnniv.getMonth() + 1;
    //ajoute cette difference de mois au total déjà calculé pour les années
    //les mois sont indexé à partir de 0, soit ex : septembre = 8

    if (today.getDate() < dateAnniv.getDate()) {
      mois--;
    }
    return mois;
  }
}
