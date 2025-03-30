import { signal } from '@angular/core';
import { EntityMock } from '../../../core';
import { GameCellItem } from '../models';
import { GameEndService } from '../services';

export class GameEndServiceMock implements EntityMock<GameEndService> {
  readonly $isGameEnd = signal(false);
  resetResult(): void {}

  stopGame(_mergedItems: GameCellItem[]): void {}
}
