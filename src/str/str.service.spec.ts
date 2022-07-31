import { Test, TestingModule } from '@nestjs/testing';
import { StrService } from './str.service';

describe('StrService', () => {
  let service: StrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrService],
    }).compile();

    service = module.get<StrService>(StrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
