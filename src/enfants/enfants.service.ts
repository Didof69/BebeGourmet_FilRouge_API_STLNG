import { Injectable } from '@nestjs/common';
import { CreateEnfantDto } from './dto/create-enfant.dto';
import { UpdateEnfantDto } from './dto/update-enfant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enfant } from './entities/enfant.entity';

@Injectable()
export class EnfantsService {
  constructor(
    @InjectRepository(Enfant)
    private enfantsRepository: Repository<Enfant>,
  ) { }
  
  create(createEnfantDto: CreateEnfantDto) {
    return 'This action adds a new enfant';
  }

  findAll() {
    return this.enfantsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} enfant`;
  }

  update(id: number, updateEnfantDto: UpdateEnfantDto) {
    return `This action updates a #${id} enfant`;
  }

  remove(id: number) {
    return `This action removes a #${id} enfant`;
  }
}
