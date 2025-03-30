import { Injectable, signal } from '@angular/core';
import { GameCellItem } from '../../models';
import { GAME_CELL_MAX_VALUE } from '../../constants';

@Injectable()
export class GameEndService {
  readonly #isGameEndSignal = signal(false);

  readonly $isGameEnd = this.#isGameEndSignal.asReadonly();

  resetResult(): void {
    this.#setIsEndGame(false);
  }

  stopGame(mergedItems: GameCellItem[]): void {
    const isGameOver = (item: GameCellItem): boolean => item.value === GAME_CELL_MAX_VALUE;

    this.#setIsEndGame(!!mergedItems.find(isGameOver));
  }

  #setIsEndGame(value: boolean): void {
    this.#isGameEndSignal.set(value);
  }
}
