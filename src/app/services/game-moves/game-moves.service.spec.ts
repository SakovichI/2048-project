import { TestBed, inject } from '@angular/core/testing';
import { GameMovesService } from './game-moves.service';

describe('GameMovesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameMovesService],
    });
  });

  it('should ...', inject([GameMovesService], (service: GameMovesService) => {
    expect(service).toBeTruthy();
  }));
});
