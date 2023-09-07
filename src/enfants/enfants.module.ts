import { Module } from '@nestjs/common';
import { EnfantsService } from './enfants.service';
import { EnfantsController } from './enfants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enfant } from './entities/enfant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enfant])],
  controllers: [EnfantsController],
  providers: [EnfantsService],
})
export class EnfantsModule {}
