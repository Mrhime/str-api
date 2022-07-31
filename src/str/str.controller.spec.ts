import { Test, TestingModule } from '@nestjs/testing';
import { StrController } from './str.controller';
import { StrService } from './str.service';

describe('StrController', () => {
  let controller: StrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StrController],
      providers: [StrService],
    }).compile();

    controller = module.get<StrController>(StrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
