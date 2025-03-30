import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { ButtonComponent, OverlayComponent, SectionContentComponent, SectionHeaderComponent } from './ui';
import { GameCellItemComponent } from './components/game-cell-item';
import { GameActionsService, GameCellItemsService, GameEndService, GameMovesService, GameScoreService, GameService } from './services';
import { GameScoreComponent } from './ui/game-score';

import { NgStyle } from '@angular/common';
import { GameCellItem, GameCellItemStyle } from './models';
import { GAME_CELL_COLOR_MAP } from './constants';

@Component({
  selector: 'app-game',
  imports: [
    SectionContentComponent,
    SectionHeaderComponent,
    GameCellItemComponent,
    GameScoreComponent,
    ButtonComponent,
    OverlayComponent,
    NgStyle,
  ],
  providers: [GameService, GameCellItemsService, GameActionsService, GameMovesService, GameScoreService, GameEndService],
  templateUrl: './game.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {
  readonly #gameService = inject(GameService);

  readonly $tableSize = this.#gameService.$tableSize;
  readonly $cellItems = this.#gameService.$cellItems;
  readonly $score = this.#gameService.$score;
  readonly $isGameEnd = this.#gameService.$isGameEnd;

  @HostListener('window:keyup', ['$event'])
  onTriggerActions(event: KeyboardEvent): void {
    this.#gameService.moveAction(event);
  }

  onRestartGame(): void {
    this.#gameService.resetGame();
  }

  getStyles(item: GameCellItem): GameCellItemStyle {
    const top = item.row * 110 - 100 + 'px';
    const left = item.col * 110 - 100 + 'px';

    return {
      top: top,
      left: left,
      'background-color': GAME_CELL_COLOR_MAP[item.value] || 'black',
    };
  }
}
