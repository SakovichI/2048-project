import { TestBed, inject } from '@angular/core/testing';
import { GameScoreService } from './game-score.service';

describe('GameScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameScoreService],
    });
  });

  it('should ...', inject([GameScoreService], (service: GameScoreService) => {
    expect(service).toBeTruthy();
  }));
});
