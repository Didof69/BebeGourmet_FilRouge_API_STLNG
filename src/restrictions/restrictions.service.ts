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
  
  create(createRestrictionDto: CreateRestrictionDto) {
    return 'This action adds a new restriction';
  }

  findAll() {
    return this.restrictionsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} restriction`;
  }

  update(id: number, updateRestrictionDto: UpdateRestrictionDto) {
    return `This action updates a #${id} restriction`;
  }

  remove(id: number) {
    return `This action removes a #${id} restriction`;
  }
}
