import { Test, TestingModule } from '@nestjs/testing';
import { SaisonsController } from './saisons.controller';
import { SaisonsService } from './saisons.service';

describe('SaisonsController', () => {
  let controller: SaisonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaisonsController],
      providers: [SaisonsService],
    }).compile();

    controller = module.get<SaisonsController>(SaisonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
