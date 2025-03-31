import { TestBed, inject } from '@angular/core/testing';
import { GameMovesService } from './game-moves.service';

describe('GameMovesService', () => {
  let service: GameMovesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameMovesService],
    });

    service = TestBed.inject(GameMovesService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
