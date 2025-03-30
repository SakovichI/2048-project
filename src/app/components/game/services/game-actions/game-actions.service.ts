import { inject, Injectable } from '@angular/core';
import { GameKeyEventCode, GameMoveDirections } from '../../enums';
import { GameCellItem, GameTableSize } from '../../models';
import { GameMovesService } from '../game-moves';
import { Nullable } from '../../../../core';

@Injectable()
export class GameActionsService {
  readonly #gameMovesService = inject(GameMovesService);

  readonly #keyEventCodeMap = new Map<GameKeyEventCode, GameMoveDirections>([
    [GameKeyEventCode.ArrowUp, GameMoveDirections.Up],
    [GameKeyEventCode.ArrowLeft, GameMoveDirections.Left],
    [GameKeyEventCode.ArrowDown, GameMoveDirections.Down],
    [GameKeyEventCode.ArrowRight, GameMoveDirections.Right],
    [GameKeyEventCode.KeyW, GameMoveDirections.Up],
    [GameKeyEventCode.KeyD, GameMoveDirections.Right],
    [GameKeyEventCode.KeyS, GameMoveDirections.Down],
    [GameKeyEventCode.KeyA, GameMoveDirections.Left],
  ]);

  readonly #keyEventActionsMap = new Map<
    GameMoveDirections,
    (gameCellItems: GameCellItem[], size: GameTableSize) => Nullable<GameCellItem[]>
  >([
    [
      GameMoveDirections.Right,
      (gameCellItems: GameCellItem[], size: GameTableSize): Nullable<GameCellItem[]> =>
        this.#gameMovesService.move(gameCellItems, size, 'row', 'col', true),
    ],
    [
      GameMoveDirections.Left,
      (gameCellItems: GameCellItem[], size: GameTableSize): Nullable<GameCellItem[]> =>
        this.#gameMovesService.move(gameCellItems, size, 'row', 'col', false),
    ],
    [
      GameMoveDirections.Up,
      (gameCellItems: GameCellItem[], size: GameTableSize): Nullable<GameCellItem[]> =>
        this.#gameMovesService.move(gameCellItems, size, 'col', 'row', false),
    ],
    [
      GameMoveDirections.Down,
      (gameCellItems: GameCellItem[], size: GameTableSize): Nullable<GameCellItem[]> =>
        this.#gameMovesService.move(gameCellItems, size, 'col', 'row', true),
    ],
  ]);

  handleAction(keyEventCode: GameKeyEventCode, gameCellItems: GameCellItem[], size: GameTableSize): Nullable<GameCellItem[]> {
    return this.#getEventAction(keyEventCode, gameCellItems, size);
  }

  #getMoveDirection(keyEventCode: GameKeyEventCode): Nullable<GameMoveDirections> {
    const moveDirection: Nullable<GameMoveDirections> = this.#keyEventCodeMap.get(keyEventCode) || null;

    if (!moveDirection) return null;

    return moveDirection;
  }

  #getEventAction(keyEventCode: GameKeyEventCode, gameCellItems: GameCellItem[], size: GameTableSize): Nullable<GameCellItem[]> {
    const moveDirection = this.#getMoveDirection(keyEventCode);
    const action = moveDirection ? this.#keyEventActionsMap.get(moveDirection) || null : null;

    if (!action) return [];

    return action(gameCellItems, size);
  }
}
