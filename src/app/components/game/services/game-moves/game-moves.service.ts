import { GameTableSize } from './../../models';
import { Injectable } from '@angular/core';
import { GameCellItem } from '../../models';
import { GameMovesDimension } from './models';

@Injectable()
export class GameMovesService {
  move(
    cellItems: GameCellItem[],
    size: GameTableSize,
    dimX: GameMovesDimension = 'row',
    dimY: GameMovesDimension = 'col',
    reverse = false,
  ): GameCellItem[] {
    const mergedItems: GameCellItem[] = [];

    for (let x = 1; x <= size; x++) {
      const items: GameCellItem[] = cellItems.filter((item) => item[dimX] === x).sort((a, b) => a[dimY] - b[dimY]);

      if (reverse) {
        items.reverse();
      }

      let y = reverse ? size : 1;
      let merged = false;
      let prevItem: GameCellItem | null = null;

      for (const item of items) {
        if (prevItem) {
          if (merged) {
            merged = false;
          } else if (item.value === prevItem.value) {
            y = reverse ? ++y : --y;
            prevItem.isOnDelete = true;
            item.isOnDelete = true;
            mergedItems.push(this.#toMergedItem(item, y, x, dimX, dimY));

            merged = true;
          }
        }

        item[dimY] = y;
        y = reverse ? --y : ++y;
        prevItem = item;
      }
    }

    return mergedItems;
  }

  #toMergedItem(
    mergedItem: GameCellItem,
    y: number,
    x: number,
    dimX: GameMovesDimension = 'row',
    dimY: GameMovesDimension = 'col',
  ): GameCellItem {
    const celItem = {
      value: mergedItem.value * 2,
      [dimY]: y,
      [dimX]: x,
    } as unknown as GameCellItem;

    return celItem;
  }
}
