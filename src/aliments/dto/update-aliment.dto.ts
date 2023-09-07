import { PartialType } from '@nestjs/mapped-types';
import { CreateAlimentDto } from './create-aliment.dto';

export class UpdateAlimentDto extends PartialType(CreateAlimentDto) {}
