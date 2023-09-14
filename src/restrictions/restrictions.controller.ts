import { Controller, Get } from '@nestjs/common';
import { RestrictionsService } from './restrictions.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('restrictions')
@ApiTags('Restrictions Controller')
export class RestrictionsController {
  constructor(private readonly restrictionsService: RestrictionsService) {}

  @Get()
  findAll() {
    return this.restrictionsService.findAll();
  }
}
