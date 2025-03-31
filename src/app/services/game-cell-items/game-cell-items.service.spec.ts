import { TestBed } from '@angular/core/testing';
import { GameCellItemsService } from './game-cell-items.service';

describe('GameCellItemsService', () => {
  let service: GameCellItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameCellItemsService],
    });

    service = TestBed.inject(GameCellItemsService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
