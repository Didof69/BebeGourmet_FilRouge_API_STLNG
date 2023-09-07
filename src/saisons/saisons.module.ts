import { Module } from '@nestjs/common';
import { SaisonsService } from './saisons.service';
import { SaisonsController } from './saisons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Saison } from './entities/saison.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Saison])],
  controllers: [SaisonsController],
  providers: [SaisonsService],
})
export class SaisonsModule {}
