import { signal } from '@angular/core';
import { EntityMock } from '../../../core';
import { GameCellItem } from '../models';
import { GameScoreService } from '../services';

export class GameScoreServiceMock implements EntityMock<GameScoreService> {
  readonly $score = signal(0);

  resetScore(): void {}

  summaryScoreValue(_mergedItems: GameCellItem[]): void {}
}
