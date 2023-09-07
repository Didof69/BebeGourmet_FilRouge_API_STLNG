import { Test, TestingModule } from '@nestjs/testing';
import { SaisonsService } from './saisons.service';

describe('SaisonsService', () => {
  let service: SaisonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaisonsService],
    }).compile();

    service = module.get<SaisonsService>(SaisonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
