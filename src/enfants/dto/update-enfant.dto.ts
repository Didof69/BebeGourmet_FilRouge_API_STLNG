import { PartialType } from '@nestjs/mapped-types';
import { CreateEnfantDto } from './create-enfant.dto';

export class UpdateEnfantDto extends PartialType(CreateEnfantDto) {}
