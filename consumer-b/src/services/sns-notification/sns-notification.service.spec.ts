import { Test, TestingModule } from '@nestjs/testing';
import { SnsNotificationService } from './sns-notification.service';

describe('SnsNotificationService', () => {
  let service: SnsNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnsNotificationService],
    }).compile();

    service = module.get<SnsNotificationService>(SnsNotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
