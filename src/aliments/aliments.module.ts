import { Module } from '@nestjs/common';
import { AlimentsService } from './aliments.service';
import { AlimentsController } from './aliments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aliment } from './entities/aliment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aliment])],
  controllers: [AlimentsController],
  providers: [AlimentsService],
})
export class AlimentsModule {}
