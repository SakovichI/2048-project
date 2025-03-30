import { signal } from '@angular/core';
import { EntityMock, Nullable } from '../core';
import { GameCellItem } from '../models';
import { GameMovesService } from '../services';

export class GameMovesServiceMock implements EntityMock<GameMovesService> {
  readonly $isGameEnd = signal(false);

  move(): Nullable<GameCellItem[]> {
    return null;
  }
}
