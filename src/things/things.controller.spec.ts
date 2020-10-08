import { Test, TestingModule } from '@nestjs/testing';
import { Thing } from './thing.interface';
import { ThingsController } from './things.controller';
import { ThingsService } from './things.service';

describe('ThingsController', () => {
  let controller: ThingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThingsController],
      providers: [ThingsService],
    }).compile();

    controller = module.get<ThingsController>(ThingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('root', () => {
    it('should return a list of things', async () => {
      const data = await controller.getThings();
      expect(data).toHaveLength(3);
    });

    it('should return a single thing', async () => {
      const data = await controller.getThing('1');
      expect(data).toMatchObject({
        name: 'Thing2',
        key1: 'baz',
        key2: 'boz',
      });
    });
  });
});
