import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from 'src/utilisateurs/entities/utilisateur.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateursRepository: Repository<Utilisateur>,
    private jwtService: JwtService,
  ) {}

  async register(createAuthDto: CreateAuthDto) {
    const { nom, prenom, email, mot_de_passe, admin } = createAuthDto;

    // hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(mot_de_passe, salt);

    // création d'une entité utilisateur
    const utilisateur = this.utilisateursRepository.create({
      nom,
      prenom,
      email,
      mot_de_passe: hashedPassword,
      admin,
    });

    try {
      // enregistrement de l'entité utilisateur
      const createdUser = await this.utilisateursRepository.save(utilisateur);
      delete createdUser.mot_de_passe;
      return createdUser;
    } catch (error) {
      // gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException('cet email est déjà utilisé');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async login(loginDto: LoginDto) {
    const { email, mot_de_passe } = loginDto;
    const utilisateur = await this.utilisateursRepository.findOneBy({ email });

    if (utilisateur && (await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe))) {
      const playload = { email };
      const accessToken = await this.jwtService.sign(playload);
      return {accessToken}
    } else {
      throw new UnauthorizedException(
        'Ces identifiants ne sont pas reconnus.'
      )
    }
   }
}
