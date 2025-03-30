import { GameTableSize } from '../../models';
import { inject, Injectable } from '@angular/core';
import { GameCellItem } from '../../models';
import { GameMovesDimension } from './models';

import { GameEndService } from '../game-end';
import { Nullable } from '../../core';

@Injectable()
export class GameMovesService {
  readonly #gameEndService = inject(GameEndService);

  move(
    cellItems: GameCellItem[],
    size: GameTableSize,
    dimX: GameMovesDimension = 'row',
    dimY: GameMovesDimension = 'col',
    reverse = false,
  ): Nullable<GameCellItem[]> {
    if (this.#gameEndService.$isGameEnd()) return null;

    const mergedItems: GameCellItem[] = [];

    for (let x = 1; x <= size; x++) {
      const items = this.#getSortedItemsForDimension(cellItems, dimX, x, dimY, reverse);

      this.#processItemsForMerge(items, mergedItems, size, x, dimX, dimY, reverse);
    }

    this.#gameEndService.stopGame(mergedItems);

    return mergedItems;
  }

  #getSortedItemsForDimension(
    items: GameCellItem[],
    dimX: GameMovesDimension,
    x: number,
    dimY: GameMovesDimension,
    reverse: boolean,
  ): GameCellItem[] {
    const filtered = items.filter((item) => item[dimX] === x);
    const sorted = filtered.sort((a, b) => a[dimY] - b[dimY]);

    return reverse ? sorted.reverse() : sorted;
  }

  #processItemsForMerge(
    items: GameCellItem[],
    mergedItems: GameCellItem[],
    size: number,
    x: number,
    dimX: GameMovesDimension,
    dimY: GameMovesDimension,
    reverse: boolean,
  ): void {
    let y = reverse ? size : 1;
    let merged = false;
    let prevItem: GameCellItem | null = null;

    for (const item of items) {
      if (this.#shouldMergeWithPrevious(item, prevItem, merged)) {
        y = this.#adjustYForMerge(y, reverse);
        this.#markItemsForMerge(item, prevItem!);

        const mergedItem = this.#createMergedItem(item, y, x, dimX, dimY);

        mergedItems.push(mergedItem);
        merged = true;
      }

      this.#updateItemPosition(item, dimY, y);
      y = this.#getNextY(y, reverse);
      prevItem = item;
    }
  }

  #shouldMergeWithPrevious(currentItem: GameCellItem, prevItem: GameCellItem | null, wasMerged: boolean): boolean {
    return !!prevItem && !wasMerged && currentItem.value === prevItem.value;
  }

  #adjustYForMerge(y: number, reverse: boolean): number {
    return reverse ? y + 1 : y - 1;
  }

  #markItemsForMerge(currentItem: GameCellItem, prevItem: GameCellItem): void {
    prevItem.isOnDelete = true;
    currentItem.isOnDelete = true;
  }

  #createMergedItem(item: GameCellItem, y: number, x: number, dimX: GameMovesDimension, dimY: GameMovesDimension): GameCellItem {
    return {
      ...item,
      [dimX]: x,
      [dimY]: y,
      value: item.value * 2,
      isOnDelete: false,
    };
  }

  #updateItemPosition(item: GameCellItem, dimY: GameMovesDimension, y: number): void {
    item[dimY] = y;
  }

  #getNextY(y: number, reverse: boolean): number {
    return reverse ? y - 1 : y + 1;
  }
}
