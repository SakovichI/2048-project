import { GameCellItem } from '../../../models';

export type GameMovesDimension = Extract<keyof GameCellItem, 'row' | 'col'>;
