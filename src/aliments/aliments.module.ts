import { Module } from '@nestjs/common';
import { AlimentsService } from './aliments.service';
import { AlimentsController } from './aliments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aliment } from './entities/aliment.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Aliment]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AlimentsController],
  providers: [AlimentsService],
})
export class AlimentsModule {}
