import { Injectable } from '@nestjs/common';
import { CreateRestrictionDto } from './dto/create-restriction.dto';
import { UpdateRestrictionDto } from './dto/update-restriction.dto';
import { Restriction } from './entities/restriction.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RestrictionsService {
  constructor(
    @InjectRepository(Restriction)
    private restrictionsRepository: Repository<Restriction>,
  ) { }

  findAll() {
    return this.restrictionsRepository.find();
  }

}
