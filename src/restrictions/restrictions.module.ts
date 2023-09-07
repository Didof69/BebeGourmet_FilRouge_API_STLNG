import { Module } from '@nestjs/common';
import { RestrictionsService } from './restrictions.service';
import { RestrictionsController } from './restrictions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restriction } from './entities/restriction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restriction])],
  controllers: [RestrictionsController],
  providers: [RestrictionsService],
})
export class RestrictionsModule {}
