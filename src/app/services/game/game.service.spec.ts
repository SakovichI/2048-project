import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService],
    });

    service = TestBed.inject(GameService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
