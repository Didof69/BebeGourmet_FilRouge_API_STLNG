import { Test, TestingModule } from '@nestjs/testing';
import { EnfantsService } from './enfants.service';

describe('EnfantsService', () => {
  let service: EnfantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnfantsService],
    }).compile();

    service = module.get<EnfantsService>(EnfantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
