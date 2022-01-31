import { Test, TestingModule } from '@nestjs/testing';
import { CotactService } from './cotact.service';

describe('CotactService', () => {
  let service: CotactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CotactService],
    }).compile();

    service = module.get<CotactService>(CotactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
