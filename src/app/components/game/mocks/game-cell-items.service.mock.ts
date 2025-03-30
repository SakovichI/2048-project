import { EntityMock } from '../../../core';
import { signal } from '@angular/core';
import { GameCellItem, GameTableSize } from '../models';
import { GameCellItemsService } from '../services';

export class GameCellItemsServiceMock implements EntityMock<GameCellItemsService> {
  readonly $cellItems = signal([]);
  readonly $availableCells = signal([]);

  resetCellItems(): void {}

  updateCellItems(_mergedSellItems: GameCellItem[]): void {}

  clearDeletedItems(_cellItems: GameCellItem[]): void {}

  generateItems(_length?: number): void {}

  generateAvailableCells(_size: GameTableSize): void {}
}
