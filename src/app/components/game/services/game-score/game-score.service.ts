import { Injectable, signal } from '@angular/core';
import { GameCellItem } from '../../models';

@Injectable()
export class GameScoreService {
  readonly #scoreSignal = signal(0);

  readonly $score = this.#scoreSignal.asReadonly();

  resetScore(): void {
    this.#setScore(0);
  }

  summaryScoreValue(mergedItems: GameCellItem[]): void {
    const toScoreValue = (acc: number, mergedItem: GameCellItem): number => acc + mergedItem.value;

    this.#setScore(this.$score() + mergedItems.reduce(toScoreValue, 0));
  }

  #setScore(score: number): void {
    this.#scoreSignal.set(score);
  }
}
