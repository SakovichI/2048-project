import { TestBed, inject } from '@angular/core/testing';
import { GameCellItemsService } from './game-cell-items.service';

describe('GameCellItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameCellItemsService],
    });
  });

  it('should ...', inject([GameCellItemsService], (service: GameCellItemsService) => {
    expect(service).toBeTruthy();
  }));
});
