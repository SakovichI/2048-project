import { GameCellItem } from '../models';
import { GameActionsService } from '../services';
import { EntityMock, Nullable } from '../core';

export class GameActionsServiceMock implements EntityMock<GameActionsService> {
  handleAction(): Nullable<GameCellItem[]> {
    return null;
  }
}
