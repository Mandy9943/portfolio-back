import { Test, TestingModule } from '@nestjs/testing';
import { CotactController } from './cotact.controller';

describe('CotactController', () => {
  let controller: CotactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CotactController],
    }).compile();

    controller = module.get<CotactController>(CotactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
