import { TestBed } from '@angular/core/testing';
import { GameScoreService } from './game-score.service';

describe('GameScoreService', () => {
  let service: GameScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameScoreService],
    });

    service = TestBed.inject(GameScoreService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
