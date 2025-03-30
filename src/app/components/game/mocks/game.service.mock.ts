import { signal } from '@angular/core';
import { EntityMock } from '../../../core';

import { GameService } from '../services';

export class GameServiceMock implements EntityMock<GameService> {
  readonly $tableSize = signal(0);
  readonly $cellItems = signal([]);
  readonly $score = signal(0);
  readonly $isGameEnd = signal(false);

  resetGame(): void {}

  moveAction(_event: KeyboardEvent): void {}

  generateItems(): void {}
}
