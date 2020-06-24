import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from './customers.service';

describe('CustomersService', () => {
  let provider: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersService],
    }).compile();

    provider = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
