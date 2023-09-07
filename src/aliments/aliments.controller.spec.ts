import { Test, TestingModule } from '@nestjs/testing';
import { AlimentsController } from './aliments.controller';
import { AlimentsService } from './aliments.service';

describe('AlimentsController', () => {
  let controller: AlimentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlimentsController],
      providers: [AlimentsService],
    }).compile();

    controller = module.get<AlimentsController>(AlimentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
