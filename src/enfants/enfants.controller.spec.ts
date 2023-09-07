import { Test, TestingModule } from '@nestjs/testing';
import { EnfantsController } from './enfants.controller';
import { EnfantsService } from './enfants.service';

describe('EnfantsController', () => {
  let controller: EnfantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnfantsController],
      providers: [EnfantsService],
    }).compile();

    controller = module.get<EnfantsController>(EnfantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
