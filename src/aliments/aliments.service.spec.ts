import { Test, TestingModule } from '@nestjs/testing';
import { AlimentsService } from './aliments.service';

describe('AlimentsService', () => {
  let service: AlimentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlimentsService],
    }).compile();

    service = module.get<AlimentsService>(AlimentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
