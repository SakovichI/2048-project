import { inject, Injectable, signal } from '@angular/core';
import { GameActionsService } from '../game-actions';
import { GameTableSize } from '../../models';
import { GAME_TABLE_SIZE } from '../../constants';
import { GameCellItemsService } from '../game-cell-items';
import { GameKeyEventCode } from '../../enums';
import { GameScoreService } from '../game-score/game-score.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  readonly #gameActionsService = inject(GameActionsService);
  readonly #gameCellItemsService = inject(GameCellItemsService);
  readonly #gameScoreService = inject(GameScoreService);

  readonly #tableSizeSignal = signal<GameTableSize>(GAME_TABLE_SIZE);

  readonly $tableSize = this.#tableSizeSignal.asReadonly();
  readonly $cellItems = this.#gameCellItemsService.$cellItems;
  readonly $score = this.#gameScoreService.$score;

  constructor() {
    this.generateItems();
  }

  resetGame(): void {
    this.#gameScoreService.resetScore();
    this.#gameCellItemsService.resetCellItems();
    this.generateItems();
  }

  moveAction(event: KeyboardEvent): void {
    if (!this.#isGameKeyEventCode(event.code)) return;

    const mergedItems = this.#gameActionsService.handleAction(event.code, this.$cellItems(), this.$tableSize());

    this.#gameCellItemsService.clearDeletedItems(this.$cellItems());
    this.#gameCellItemsService.updateCellItems(mergedItems);
    this.#gameScoreService.summaryScoreValue(mergedItems);
    this.#gameCellItemsService.generateItems();
  }

  generateItems(): void {
    this.#gameCellItemsService.generateAvailableCells(this.$tableSize());
    this.#gameCellItemsService.generateItems();
  }

  #isGameKeyEventCode(code: string): code is GameKeyEventCode {
    return Object.values(GameKeyEventCode).includes(code as GameKeyEventCode);
  }
}
