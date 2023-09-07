import { PartialType } from '@nestjs/mapped-types';
import { CreateSaisonDto } from './create-saison.dto';

export class UpdateSaisonDto extends PartialType(CreateSaisonDto) {}
