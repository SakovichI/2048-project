import { TestBed } from '@angular/core/testing';
import { GameEndService } from './game-end.service';

describe('GameEndService', () => {
  let service: GameEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameEndService],
    });

    service = TestBed.inject(GameEndService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
