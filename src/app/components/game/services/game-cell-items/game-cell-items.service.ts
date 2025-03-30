import { Injectable, signal } from '@angular/core';
import { GameCellItem, GameTableSize } from '../../models';

@Injectable()
export class GameCellItemsService {
  readonly #cellItemsSignal = signal<GameCellItem[]>([]);
  readonly #availableCellsSignal = signal<number[]>([]);

  readonly $cellItems = this.#cellItemsSignal.asReadonly();
  readonly $availableCells = this.#availableCellsSignal.asReadonly();

  get emptyCells(): number[] {
    const notEmptyCells = this.notEmptyCells;

    return this.$availableCells().filter((position) => !notEmptyCells.includes(position));
  }

  get notEmptyCells(): number[] {
    return this.$cellItems().map((item) => item.row * 10 + item.col);
  }

  resetCellItems(): void {
    this.#setCellItems([]);
  }

  updateCellItems(mergedSellItems: GameCellItem[]): void {
    this.#setCellItems([...this.$cellItems(), ...mergedSellItems]);
  }

  clearDeletedItems(cellItems: GameCellItem[]): void {
    const toFilteredItems = (cellItem: GameCellItem): boolean => !cellItem.isOnDelete;

    this.#setCellItems(cellItems.filter(toFilteredItems));
  }

  generateItems(length = 2): void {
    const positions: number[] = this.emptyCells.sort(() => Math.random() - 0.5).slice(0, length);

    const toCellItem = (position: number): GameCellItem => {
      return { value: 2, col: position % 10, row: (position - (position % 10)) / 10 };
    };
    const newCellItems = positions.map(toCellItem);

    const result = [...this.$cellItems(), ...newCellItems];

    this.#setCellItems(result);
  }

  generateAvailableCells(size: GameTableSize): void {
    const availableCells: number[] = [];

    for (let row = 1; row <= size; row++) {
      for (let col = 1; col <= size; col++) {
        availableCells.push(row * 10 + col);
      }
    }

    this.#setAvailableCells(availableCells);
  }

  #setCellItems(cellItems: GameCellItem[]): void {
    this.#cellItemsSignal.set(cellItems);
  }

  #setAvailableCells(value: number[]): void {
    this.#availableCellsSignal.set(value);
  }
}
